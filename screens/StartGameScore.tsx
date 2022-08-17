import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

const StartGameScreen = ({onPickNumber}: any) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const numberInputHandler = (value: string) => {
    setEnteredNumber(value);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Cant Enter ', 'Number Has to be a number between 1 and 99', [
        {text: 'Okay', style: 'destructive', onPress: resetInputHandler},
      ]);
    } else {
      onPickNumber(chosenNumber);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 100,
    width: '80%',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 15, height: 5},
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 55,
    width: 50,
    textAlign: 'center',
    fontSize: 32,

    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
