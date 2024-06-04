import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import CustomCheckBox from './src/components/CustomCheckBox';

const App = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const handleCheckboxPress = () => {
    setChecked(!checked);
  };
  const handleCheckboxPress2 = () => {
    setChecked2(!checked2);
  };
  const handleCheckboxPress3 = () => {
    setChecked3(!checked3);
  };
  const handleCheckboxPress4 = () => {
    setChecked4(!checked4);
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.marginBottom]}>Custom Check Box</Text>
      <View style={styles.marginBottom}>
        <TouchableWithoutFeedback
          style={styles.marginBottom}
          onPress={() => {
            handleCheckboxPress();
          }}>
          <View>
            <CustomCheckBox
              width={50}
              height={50}
              checked={checked}
              checkMarkColor={'white'}
              checkedBorderColor={'#FFA901'}
              unCheckedBorderColor={'#D9D9D9'}
              checkedBackgroundColor={'#FFA901'}
              unCheckedBackgroundColor={'white'}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.marginBottom}>
        <TouchableWithoutFeedback
          onPress={() => {
            handleCheckboxPress2();
          }}>
          <View>
            <CustomCheckBox
              width={50}
              height={50}
              checked={checked2}
              checkMarkColor={'white'}
              checkedBorderColor={'#378BA4'}
              unCheckedBorderColor={'#81BECE'}
              checkedBackgroundColor={'#378BA4'}
              unCheckedBackgroundColor={'#E8EDE7'}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.marginBottom}>
        <TouchableWithoutFeedback
          onPress={() => {
            handleCheckboxPress3();
          }}>
          <View>
            <CustomCheckBox
              width={50}
              height={50}
              checked={checked3}
              checkMarkColor={'white'}
              checkedBorderColor={'#107980'}
              unCheckedBorderColor={'#76A1A7'}
              checkedBackgroundColor={'#107980'}
              unCheckedBackgroundColor={'#EDE1CF'}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.marginBottom}>
        <TouchableWithoutFeedback
          onPress={() => {
            handleCheckboxPress4();
          }}>
          <View>
            <CustomCheckBox
              width={50}
              height={50}
              checked={checked4}
              checkMarkColor={'white'}
              checkedBorderColor={'#796EA8'}
              unCheckedBorderColor={'#A6A9C8'}
              checkedBackgroundColor={'#796EA8'}
              unCheckedBackgroundColor={'#D3D9E9'}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
  marginBottom: {
    marginBottom: 10,
  },
});
