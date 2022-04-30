import {createTheme} from '../../core';
import {palette, synthwave84} from './synthwave84';

export const synthwave84Theme = createTheme({
  id: 'synthwave84',
  editorTheme: synthwave84,
  properties: {
    darkMode: true,
    label: "Synthwave '84",
    previewBackground: `#4946AAFF`,
    terminal: {
      main: palette.background,
      text: palette.coral,
    },
  },
} as const);
