import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface IButtonProps {
  children: string;
  onPress: any;
}

const PrimaryButton = ({children, onPress}: IButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: '#5ce1a5'}}>
        <Text style={[styles.buttonText]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#c62a78',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
