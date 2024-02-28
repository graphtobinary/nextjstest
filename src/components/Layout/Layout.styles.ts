import { customStyled, ThemeType } from 'theme';
import {
  PaddingProps,
  padding,
  display,
  DisplayProps,
  PositionProps,
  position,
  margin,
} from 'styled-system';

export const MaxWidthLayout = customStyled.main<
  PaddingProps & DisplayProps & PositionProps & { theme?: ThemeType }
>`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  // min-height: 500px;
  ${padding};
  ${display};
  ${position};
  ${margin};
  overflow: hidden;
  margin: auto;
`;
