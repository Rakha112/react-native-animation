import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect} from 'react';
import {MotiImage, MotiText, MotiView, useAnimationState} from 'moti';
import {useNavigation} from '@react-navigation/native';
const CustomButton = ({flatlistRef, flatListIndex, dataLength}) => {
  const navigation = useNavigation();
  const buttonAnimationState = useAnimationState({
    from: {
      width: 60,
      height: 60,
    },
    getStarted: {
      width: 140,
      transition: {duration: 2000},
    },
  });

  const arrowAnimationState = useAnimationState({
    from: {
      opacity: 1,
      translateX: 0,
    },
    getStarted: {
      opacity: 0,
      translateX: 100,
    },
  });

  const textAnimationState = useAnimationState({
    from: {
      opacity: 0,
      translateX: -100,
    },
    getStarted: {
      opacity: 1,
      translateX: 0,
    },
  });

  useEffect(() => {
    if (flatListIndex === dataLength - 1) {
      buttonAnimationState.transitionTo('getStarted');
      arrowAnimationState.transitionTo('getStarted');
      textAnimationState.transitionTo('getStarted');
    } else {
      buttonAnimationState.transitionTo('from');
      arrowAnimationState.transitionTo('from');
      textAnimationState.transitionTo('from');
    }
  }, [
    arrowAnimationState,
    buttonAnimationState,
    dataLength,
    flatListIndex,
    textAnimationState,
  ]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (flatListIndex < dataLength - 1) {
          flatlistRef.current.scrollToIndex({index: flatListIndex + 1});
        } else {
          navigation.navigate('Home');
        }
      }}>
      <MotiView style={styles.container} state={buttonAnimationState}>
        <MotiText
          style={styles.textButton}
          state={textAnimationState}
          transition={{type: 'timing'}}>
          Get Started
        </MotiText>
        <MotiImage
          source={require('../assets/ArrowIcon.png')}
          style={styles.arrow}
          state={arrowAnimationState}
          transition={{type: 'timing'}}
        />
      </MotiView>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  arrow: {
    width: 30,
    height: 30,
    position: 'absolute',
  },
  textButton: {color: 'white', fontSize: 16, position: 'absolute'},
});
