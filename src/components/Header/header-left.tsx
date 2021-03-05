import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import React from 'react';
import { Icon } from 'react-native-elements';
import { Colors } from 'src/styles';
import { Component } from 'src/types';

interface Props extends StackHeaderLeftButtonProps {
  goBack: () => void;
}

export const renderHeaderLeft = (props: Props) => {
  if (props.canGoBack) {
    return <HeaderLeft {...props} />;
  }
};

export const HeaderLeft: Component<Props> = ({ goBack }) => (
  <Icon type="ionicon" name="chevron-back" color={Colors.white} onPress={goBack} />
);
