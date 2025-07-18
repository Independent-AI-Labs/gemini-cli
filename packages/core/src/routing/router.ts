/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as path from 'node:path';
import { ModelSpec, RequestContext } from './types.js';

type RouterFunction = (context: RequestContext) => ModelSpec | null;

export class ModelRouter {
  private routerFunction?: RouterFunction;

  constructor(private rulesPath?: string) {}

  async initialize() {
    if (!this.rulesPath) {
      return;
    }

    try {
      const rulesModule = await import(path.resolve(this.rulesPath));
      if (typeof rulesModule.default === 'function') {
        this.routerFunction = rulesModule.default;
      } else {
        console.warn(
          `Routing rules file at ${this.rulesPath} does not have a default export that is a function.`,
        );
      }
    } catch (error) {
      console.warn(`Error loading routing rules from ${this.rulesPath}:`, error);
    }
  }

  getModel(context: RequestContext): ModelSpec | null {
    if (!this.routerFunction) {
      return null;
    }

    return this.routerFunction(context);
  }
}
