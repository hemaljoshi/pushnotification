import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {Component} from 'react';
import Colors from '../../Colors';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
export default class Container extends Component<Props> {
  render() {
    const {style} = this.props;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
      },
    });
    return <View style={[styles.container, style]}>{this.props.children}</View>;
  }
}
