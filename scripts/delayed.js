// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';
// eslint-disable-next-line import/no-cycle
import {
  detectCodepenBlock,
  detectCodeHighlightedBlock,
} from './scripts.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
detectCodepenBlock();
detectCodeHighlightedBlock();
