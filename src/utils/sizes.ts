import * as constants from './constants';
import { Platform } from 'react-native';
import { normalize } from 'react-native-elements';

export default {
  toolbarHeight: 100,
  headerHeight: constants.ifIphoneX(92, constants.responsiveHeight(13)),
  cardScreenHeaderHeight: Platform.select({
    ios: constants.ifIphoneX(95, 85),
    android: normalize(60),
  }),
  userModalHeaderHeight: constants.ifIphoneX(100, 75),
  homeScreenParallaxHeader: constants.ifIphoneX(
    constants.responsiveHeight(38),
    constants.responsiveHeight(48),
  ),
  cardScreenParallaxHeader: constants.ifIphoneX(
    constants.responsiveHeight(43),
    constants.responsiveHeight(53),
  ),
  userScreenParallaxHeader: constants.ifIphoneX(
    constants.responsiveHeight(43),
    constants.responsiveHeight(53),
  ),
  hitSlop: {
    top: 15,
    left: 15,
    bottom: 15,
    right: 15,
  },
  textSizes: {
    h1: normalize(32),
    h2: normalize(24),
    h3: normalize(20),
    h4: normalize(16),
    h5: normalize(14),
    h6: normalize(13),
    h7: normalize(12),
    h8: normalize(10),
    h10: normalize(7),
  },
  fontSizes: {
    h1: {
      fontSize: normalize(32),
      paddingTop: Platform.OS === 'ios' ? 15 : undefined, // 6
      marginBottom: Platform.OS === 'ios' ? -5 : undefined, // 6
      includeFontPadding: false,
    },
    h2: {
      fontSize: normalize(24),
      paddingTop: Platform.OS === 'ios' ? 5 : undefined,
    },
    h3: {
      fontSize: normalize(20),
      paddingTop: Platform.OS === 'ios' ? 4 : undefined,
    },
    h4: {
      fontSize: normalize(16),
      paddingTop: Platform.OS === 'ios' ? 4 : undefined,
    },
    h5: {
      fontSize: normalize(14),
      paddingTop: Platform.OS === 'ios' ? 4 : undefined,
      paddingBottom: Platform.OS === 'ios' ? 4 : undefined,
    },
    h6: {
      fontSize: normalize(13),
      paddingTop: Platform.OS === 'ios' ? 3 : undefined,
    },
    h7: {
      fontSize: normalize(12),
      paddingTop: Platform.OS === 'ios' ? 4 : undefined,
    },
    h8: {
      fontSize: normalize(10),
      paddingTop: Platform.OS === 'ios' ? 4 : undefined,
    },
    h10: {
      fontSize: normalize(Platform.OS === 'ios' ? 8 : 7),
      paddingTop: Platform.OS === 'ios' ? 4 : undefined,
    },
  },
};
