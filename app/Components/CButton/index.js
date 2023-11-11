/* eslint-disable prettier/prettier */
import   {React,useState} from 'react';
import {View, TouchableOpacity, Text,ActivityIndicator } from 'react-native';
import styles from './styles';
import {BaseColor} from '../../config/theme';

const CButton = props => {
  const {title = '', handleButtonPress = () => {}, loading,btnStyle} = props;
  const [loader,setLoader] = useState(false);
  const [disable] = useState(false);

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.otpBtn]}
        disabled={disable}
        onPress={() => {
          setTimeout(() => {
            setLoader(false);
          }, 5000);
          handleButtonPress();

        }}>

         <View style={[styles.sendotp, btnStyle]}>
          {loading ? (
            <ActivityIndicator color={BaseColor.white} size={'small'} />
          ) : (
            <Text style={styles.otpTxt}>{title}</Text>
          )}
        </View>

      </TouchableOpacity>
    </View>
  );
};

export default CButton;
