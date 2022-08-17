import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import StartGameScore from './screens/StartGameScore';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
const App = () => {
  const [useNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber: any) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScore onPickNumber={pickedNumberHandler} />;

  if (useNumber) {
    screen = <GameScreen userNumber={useNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary400, '#ddb52f']}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
