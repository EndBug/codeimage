import {textFieldStyles, themeVars} from '@codeimage/ui';
import {responsiveStyle} from '@codeui/kit';
import {createVar, style} from '@vanilla-extract/css';

export const input = style([
  textFieldStyles.baseField,
  {
    padding: themeVars.spacing['1'],
    paddingLeft: themeVars.spacing['3'],
    paddingRight: themeVars.spacing['3'],
    flex: 1,
    justifyContent: 'space-between',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: themeVars.spacing['3'],
  },
]);

export const fontListboxHeight = createVar();

export const fontPickerPopover = style([
  {
    width: '360px',
    maxWidth: '360px',
    vars: {
      [fontListboxHeight]: '350px',
    },
  },
  responsiveStyle({
    md: {
      maxWidth: 'initial',
    },
  }),
]);

export const aspectRatioCardDetails = style({
  color: themeVars.dynamicColors.descriptionTextColor,
  fontSize: themeVars.fontSize.xs,
});

export const centeredContent = style({
  width: '100%',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

export const virtualizedFontListboxWrapper = style({
  height: fontListboxHeight,
});

export const virtualizedFontListbox = style({
  maxHeight: fontListboxHeight,
  overflow: 'auto',
  height: '100%',
});
