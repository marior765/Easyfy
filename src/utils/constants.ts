import { Dimensions, Platform } from 'react-native';
import { normalize } from 'react-native-elements';

interface ICalculateSquareSize {
  width: number;
  height: number;
}

interface ICalculateSquareWidthSize {
  width: number;
  height: number;
  minWidth: number;
  minHeight: number;
  maxWidth: number;
  maxHeight: number;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const deviceWidth = screenWidth;
export const deviceHeight = screenHeight;

export const responsiveHeight = h => screenHeight * (h / 100);

export const responsiveWidth = w => screenWidth * (w / 100);

export const breakpoints = {
  smallPhoneWidth: 320,
  smallPhoneHeight: 600,
  mediumPhoneWidth: 414,
  bigPhoneWidth: 480,
};
export const isSmallScreen =
  screenWidth <= breakpoints.smallPhoneWidth || screenHeight <= breakpoints.smallPhoneHeight;
export const isNormalScreen =
  screenWidth > breakpoints.smallPhoneWidth && screenWidth < breakpoints.mediumPhoneWidth;
export const isBigScreen = screenWidth >= breakpoints.mediumPhoneWidth;
export const isBiggestPhoneScreen = screenWidth >= breakpoints.bigPhoneWidth;

export const isAndroid = Platform.OS === 'android';

export const deviceSizeProps = {
  width: screenWidth,
  height: screenHeight,
};

// iphone 8 pixels comparison

export const getLineHeight = (size: number) =>
  Number(size) * (Platform.OS === 'ios' ? 1.0 + size / 600 : 1.2);

export const compareScreenWidth = 375;
export const compareScreenHeight = 667;

export const horizontalScale = (size = 0) => (screenWidth / compareScreenWidth) * size;
export const verticalScale = (size = 0) => {
  console.log(
    'verticalScale',
    size,
    screenHeight,
    compareScreenHeight,
    (screenHeight / compareScreenHeight) * size,
  );
  return (screenHeight / compareScreenHeight) * size;
};

export const calculateSize = ({
  width: w,
  height: h,
}: ICalculateSquareSize): ICalculateSquareSize => ({
  width: horizontalScale(w),
  height: verticalScale(h),
});

export const calculateOneDimensionSize = (size: number): number => {
  const { width, height } = calculateSize({ width: size, height: size });

  return width < height ? height : width;
};

export const calculateSquareSize = (size: number): ICalculateSquareSize => {
  const { width, height } = calculateSize({ width: size, height: size });

  return {
    width: width < height ? height : width,
    height: width < height ? height : width,
  };
};

export const calculateSquareWidthSize = (size: number): ICalculateSquareWidthSize => ({
  width: size,
  height: size,
  minWidth: size,
  minHeight: size,
  maxWidth: size,
  maxHeight: size,
});

export const textSizes: { [x: string]: number } = {
  h1: normalize(32),
  h2: normalize(24),
  h3: normalize(20),
  h4: normalize(16),
  h5: normalize(14),
  h6: normalize(13),
  h7: normalize(12),
  h8: normalize(10),
  h10: normalize(7),
};

export { normalize };
