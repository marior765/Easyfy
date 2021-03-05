import { ParamListBase, RouteProp } from '@react-navigation/native';
import { INavigation } from 'src/types';
import { Colors, Fonts, commonShadow, ActiveTheme } from 'src/styles';

import { renderHeaderLeft, HeaderLeft } from './header-left';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

export const commonHeader = (props: {
  route: RouteProp<ParamListBase, keyof ParamListBase>;
  navigation: INavigation;
}) => {
  const { colors } = ActiveTheme;
  return {
    headerTintColor: Colors.white,
    headerTitleStyle: {
      color: Colors.white,
      fontFamily: Fonts.GothamBook,
    },
    headerStyle: {
      backgroundColor: colors.primary,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      ...commonShadow,
    },
    headerLeft: (leftHeaderProps: StackHeaderLeftButtonProps) =>
      renderHeaderLeft({ ...leftHeaderProps, goBack: props.navigation.goBack }),
  };
};

export { HeaderLeft };
