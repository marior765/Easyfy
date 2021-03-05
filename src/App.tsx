import 'react-native-gesture-handler';
import React from 'react';
import Toast from 'react-native-toast-message';
import RootNavigation from 'src/navigation';
import { ThemeManager } from 'src/providers';

export default () => (
  <>
    <ThemeManager>
      <RootNavigation />
    </ThemeManager>
    <Toast ref={ref => Toast.setRef(ref)} />
  </>
);
