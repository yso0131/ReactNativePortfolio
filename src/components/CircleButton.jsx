import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';

export default function CircleButton(props) {
  const { children, style, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
  style: shape(),
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#9a9a9a',
    width: 80,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // position: 'absolute',
    // right: -100,
    // bottom: -290,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8, // androidのシャドウ
  },
  circleButtonLabel: {
    color: 'black',
    fontSize: 20,
  },
});
