import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/games/numberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number,
): any => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber}: any) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber,
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: any) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert('Lier');
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log('minBoundary , maxBoundary', minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );

    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              -
            </PrimaryButton>
          </View>
          <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View>
        <Text>LOg Rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
