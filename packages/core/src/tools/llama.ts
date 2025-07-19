/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTool, Icon, ToolResult } from './tools.js';
import { Schema, Type } from '@google/genai';
import { Config } from '../config/config.js';

export interface LlamaCppToolParams {
  input: string;
}

export class LlamaCppTool extends BaseTool<LlamaCppToolParams, ToolResult> {
  static readonly Name = 'llama_cpp';

  constructor(private config: Config) {
    const parameterSchema: Schema = {
      type: Type.OBJECT,
      properties: {
        input: {
          type: Type.STRING,
          description: 'The input string to process.',
        },
      },
      required: ['input'],
    };

    super(
      LlamaCppTool.Name,
      'LlamaCpp',
      'A tool for interacting with a local llama.cpp server.',
      Icon.Terminal,
      parameterSchema,
    );
  }

  async execute(
    params: LlamaCppToolParams,
    _signal: AbortSignal,
  ): Promise<ToolResult> {
    const llamaCppServerAddress = this.config.getLlamaCppServerAddress();
    if (!llamaCppServerAddress) {
      return {
        llmContent: 'Error: llama.cpp server address is not configured.',
        returnDisplay: 'Error: llama.cpp server address is not configured.',
      };
    }

    try {
      const response = await fetch(llamaCppServerAddress, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: params.input,
        }),
      });

      if (!response.ok) {
        return {
          llmContent: `Error: llama.cpp server returned status ${response.status}`,
          returnDisplay: `Error: llama.cpp server returned status ${response.status}`,
        };
      }

      const data = await response.json();
      return {
        llmContent: data.content,
        returnDisplay: data.content,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      return {
        llmContent: `Error: Could not connect to llama.cpp server: ${errorMessage}`,
        returnDisplay: `Error: Could not connect to llama.cpp server: ${errorMessage}`,
      };
    }
  }
}
