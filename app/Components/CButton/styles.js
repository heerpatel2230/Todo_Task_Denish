/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { BaseAnimationBuilder } from 'react-native-reanimated';
import { BaseColor } from '../../config/theme';

const styles = StyleSheet.create({
    sendotp: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 13,
        backgroundColor: '#243168',
        borderRadius: 15,
      },
      otpTxt: {
        color: BaseColor.white,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily:'Poppins',
      },
      otpBtn: {
        alignItems: 'center',
        marginTop: 20,
        borderRadius:10,
        width : '100%',

      },
      linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
      },
  });

  export default styles;

