/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModelRouter } from '../../src/routing/router.js';
import { RequestContext } from '../../src/routing/types.js';
import { expect, describe, it, vi } from 'vitest';
import * as path from 'node:path';

describe('ModelRouter', () => {
  it('should return null if no rules path is provided', async () => {
    const router = new ModelRouter();
    await router.initialize();
    const context: RequestContext = { prompt: 'test' };
    const model = router.getModel(context);
    expect(model).toBeNull();
  });

  it('should return null if the rules file does not have a default export', async () => {
    const rulesPath = path.resolve(
      __dirname,
      './test-rules/no-default-export.ts',
    );
    const router = new ModelRouter(rulesPath);
    await router.initialize();
    const context: RequestContext = { prompt: 'test' };
    const model = router.getModel(context);
    expect(model).toBeNull();
  });

  it('should return the correct model based on the rules', async () => {
    const rulesPath = path.resolve(__dirname, './test-rules/simple-rules.ts');
    const router = new ModelRouter(rulesPath);
    await router.initialize();

    const context1: RequestContext = { prompt: 'summarize this' };
    const model1 = router.getModel(context1);
    expect(model1).toEqual({
      provider: 'google',
      model: 'gemini-2.5-flash',
    });

    const context2: RequestContext = { prompt: 'write some code' };
    const model2 = router.getModel(context2);
    expect(model2).toEqual({
      provider: 'local',
      model: 'codellama',
    });

    const context3: RequestContext = { prompt: 'hello' };
    const model3 = router.getModel(context3);
    expect(model3).toBeNull();
  });
});
