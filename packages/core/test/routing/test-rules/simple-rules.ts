/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModelSpec, RequestContext } from '../../../src/routing/types.js';

export default (context: RequestContext): ModelSpec | null => {
  if (context.prompt.includes('summarize')) {
    return {
      provider: 'google',
      model: 'gemini-2.5-flash',
    };
  }

  if (context.prompt.includes('code')) {
    return {
      provider: 'local',
      model: 'codellama',
    };
  }

  return null;
};
