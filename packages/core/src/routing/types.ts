/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ModelSpec {
  provider: string;
  model: string;
}

export interface RequestContext {
  prompt: string;
}
