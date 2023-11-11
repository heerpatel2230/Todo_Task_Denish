import {Platform, StyleSheet} from 'react-native';
import BaseColor from './colors';
import {isTab} from './MQ';

// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

/**
 * Common font family setting
 * - This font name will be used for all template
 * - Check more how to add more font family with url below
 * @url http://passionui.com/docs/felix-travel/theming
 */
export const FontFamily = {
  light: Platform.OS === 'android' ? 'Raleway-Light' : 'System',
  default: Platform.OS === 'android' ? 'Raleway-Regular' : 'System',
  medium: Platform.OS === 'android' ? 'Raleway-Medium' : 'System',
  semibold: Platform.OS === 'android' ? 'Raleway-SemiBold' : 'System',
  bold: Platform.OS === 'android' ? 'Raleway-Bold' : 'System',
  black: Platform.OS === 'android' ? 'Raleway-Black' : 'System',
  extraBold: Platform.OS === 'android' ? 'Raleway-ExtraBold' : 'System',

  // Roboto
  robotoLight: Platform.OS === 'android' ? 'Roboto-Light' : 'System',
  robotoDefault: Platform.OS === 'android' ? 'Roboto-Regular' : 'System',
  robotoMedium: Platform.OS === 'android' ? 'Roboto-Medium' : 'System',
  robotoBold: Platform.OS === 'android' ? 'Roboto-Bold' : 'System',
};

/**
 * Fontweight setting
 * FontsFree-Net-SF-Pro-Rounded-Medium
 * - This font weight will be used for style of screens where needed
 * - Check more how to use font weight with url below
 * @url http://passionui.com/docs/felix-travel/theming
 */
export const FontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

/**
 * Typography setting
 * - This font weight will be used for all template
 * - Check more how to use typography in url below
 * @url http://passionui.com/docs/felix-travel/theming
 */
export const Typography = StyleSheet.create({
  default: {
    fontFamily: FontFamily.default,
  },
  errorMsgText: {
    fontSize: isTab ? 16 : 12,
    fontFamily: FontFamily.bold,
    color: BaseColor.errorRed,
  },
  createAccountText: {
    fontSize: 20,
    fontFamily: FontFamily.bold,
    color: BaseColor.blackColor,
  },
  createAccountDesc: {
    fontSize: 12,
    fontFamily: FontFamily.medium,
    color: BaseColor.blackColor,
    lineHeight: 30,
  },
  agreeText: {
    fontSize: 11,
    fontFamily: FontFamily.medium,
    color: BaseColor.blackColor,
  },
  checkBoxLabelText: {
    fontSize: 12,
    fontFamily: FontFamily.medium,
    color: BaseColor.blackColor,
  },
  termsPrivacy: {
    fontSize: 12,
    fontFamily: FontFamily.semibold,
    color: BaseColor.primary,
    textDecorationLine: 'underline',

    // borderBottomWidth: 1,
    // borderBottomColor: BaseColor.primary,
  },
  CUploadingLabel: {
    fontSize: 18,
    fontFamily: FontFamily.semibold,
    color: BaseColor.textColor,
  },
  CUploadingSubLabel: {
    fontSize: 12,
    fontFamily: FontFamily.default,
    color: BaseColor.textGray,
  },
  CUploadingMainImageText: {
    fontSize: 12,
    fontFamily: FontFamily.semibold,
    color: BaseColor.whiteColor,
  },
  CUploadingWarningText: {
    fontSize: 12,
    color: BaseColor.errorRed,
    fontFamily: FontFamily.semibold,
  },
  modalTitleTxt: {
    fontSize: 20,
    fontFamily: FontFamily.bold,
    color: BaseColor.textColor,
  },
  labelText: {
    fontSize: 16,
    fontFamily: FontFamily.semibold,
    color: BaseColor.primary,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: FontFamily.semibold,
    color: BaseColor.white,
  },
  orText: {
    fontSize: 16,
    fontFamily: FontFamily.medium,
    color: BaseColor.blackColor,
  },
  googleBtnText: {
    fontSize: 16,
    fontFamily: FontFamily.semibold,
    color: BaseColor.blackColor,
  },
  placeholder: {
    fontSize: 16,
    fontFamily: FontFamily.medium,
    color: BaseColor.textColor,
    paddingHorizontal:10,
  },
  dropDownPlaceholder: {
    fontSize: 14,
    fontFamily: FontFamily.medium,
    color: BaseColor.textColor,
  },
  login: {
    fontSize: 13,
    fontFamily: FontFamily.semibold,
    color: BaseColor.primary,
    textDecorationLine: 'underline',
  },
  alreadyText: {
    fontSize: 14,
    fontFamily: FontFamily.medium,
    color: BaseColor.blackColor,
  },
  forgotText: {
    fontSize: 14,
    fontFamily: FontFamily.semibold,
    color: BaseColor.primary,
  },
  cardTitleFont: {
    fontSize: 14,
    fontFamily: FontFamily.semibold,
    color: BaseColor.textColor,
  },
  cardCurrencyFont: {
    fontSize: 14,
    fontFamily: FontFamily.robotoMedium,
    color: BaseColor.primary,
  },
  pricePerFont: {
    fontSize: 12,
    fontFamily: FontFamily.semibold,
    color: BaseColor.primary,
  },
  productTitleText: {
    fontSize: 18,
    fontFamily: FontFamily.bold,
    color: BaseColor.textColor,
  },
  catSubCatStyle: {
    fontSize: 16,
    fontFamily: FontFamily.medium,
    color: BaseColor.textColor,
  },
  productId: {
    fontSize: 16,
    fontFamily: FontFamily.bold,
    color: BaseColor.textColor,
  },
  priceFontStyle: {
    fontSize: 18,
    fontFamily: FontFamily.robotoBold,
    color: BaseColor.primary,
  },
  mainLabelText: {
    fontSize: 18,
    fontFamily: FontFamily.bold,
    color: BaseColor.textColor,
  },
});
