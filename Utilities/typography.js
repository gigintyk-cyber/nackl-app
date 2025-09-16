// typography.js
import { Dimensions, PixelRatio } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375; // base width (iPhone 8)

export const normalize = size => Math.round(PixelRatio.roundToNearestPixel(size * scale));

// Typography tokens
export const Typography = {
  H1: { fontSize: normalize(32), className: 'font-bold text-gray-900' },
  H2: { fontSize: normalize(28), className: 'font-semibold text-gray-900' },
  H3: { fontSize: normalize(24), className: 'font-medium text-gray-900' },
  H4: { fontSize: normalize(20), className: 'font-medium text-gray-900' },
  H5: { fontSize: normalize(18), className: 'font-semibold text-gray-900' },
  H6: { fontSize: normalize(16), className: 'font-semibold text-gray-900' },

  BodyLarge: { fontSize: normalize(16), className: 'text-gray-700' },
  Body: { fontSize: normalize(14), className: 'text-gray-700' },
  BodySmall: { fontSize: normalize(12), className: 'text-gray-500' },

  ButtonLarge: { fontSize: normalize(18), className: 'font-bold text-white' },
  Button: { fontSize: normalize(16), className: 'font-bold text-white' },
  ButtonSmall: { fontSize: normalize(14), className: 'font-bold text-white' },

  Caption: { fontSize: normalize(12), className: 'text-gray-400' },
  Overline: { fontSize: normalize(10), className: 'text-gray-400 uppercase' },
};
