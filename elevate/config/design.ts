//Design System Token Imports 

//Elevate Utility Imports
import { dimensionUtility } from "../core/system/etc/dimension.js";



//System Standard Imports
import { raracolors } from "../design/RaraColors.js";
import { spacing } from "../core/system/design/spacing.js";
import { typography } from "../core/system/design/typography.js";
import { breakpoints } from '../core/system/design/breakpoints.js';
import { effects } from '../core/system/design/effects.js';

//Token Definitions
export const designSystem = {
    ColorToken: raracolors,
    BreakPointToken: breakpoints,
    SpacingToken: {...spacing,...dimensionUtility},
    FontSizeToken: typography.size,
    FontFamilyToken: typography.family,
    LineHeightToken: typography.leading,
    LetterSpacingToken: typography.tracking,
    FontWeightToken: typography.weight,
    ShadowToken: effects.shadows,
    GradientToken: effects.gradients,
    TextShadowToken: effects.textShadows,
    TransitionToken: effects.transitions,
    PatternToken: effects.backgrounds,
    MeasureToken: typography.measure,
};