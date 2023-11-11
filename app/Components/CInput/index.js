/* eslint-disable react/jsx-props-no-spreading */
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {CustomIcon} from '../../config/LoadIcons';
import {FontFamily, Typography} from '../../config/typography';
import {BaseColor} from '../../config/theme';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Files from '../../config/Files';
// import CModal from '../CModal';

// Remove font scale
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const CInput = React.forwardRef((props, ref) => {
  const {
    mainContainerStyle = {},
    onSubmitEditing = () => {},
    placeholder = '',
    onChangeText = () => {},
    isLastInput = false,
    isLast = false,
    returnKeyType = '',
    secureTextEntry = false,
    searchIcon = false,
    editable = true,
    value = '',
    keyboardType = 'visible-password',
    multiline = false,
    maxLength = multiline ? null : 50,
    inputStyle = {},
    numberOfLines = 1,
    autoCapitalize = 'sentences',
    errorMsg = '',
    iconName = '',
    inputContainerStyle = {},
    onFocus = () => {},
    onBlur = () => {},
    // Search
    searchBar = false,
    startIconStyle,
    eyeIcon = false,
    onPressIn = () => {},
    filterPress = () => {},
    filterIcon = false,
    arrowIcon = false,
    onArrowPress = () => {},

    numberInput,
    textAlignVertical = 'top',
    ...rest
  } = props;

  const showError = !_.isEmpty(errorMsg);

  return (
    <View style={mainContainerStyle}>
      {searchBar ? (
        <View style={[styles.searchBarContainer]}>
          <TouchableOpacity>
            <CustomIcon
              name="search_icon"
              color={BaseColor.primary}
              size={12}
            />
          </TouchableOpacity>
          <TextInput
            style={[
              Typography.placeholder,
              styles.searchInput,
              {width: '86%'},
              inputStyle,
            ]}
            value={value}
            placeholderTextColor={BaseColor.textGray}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onSubmitEditing={onSubmitEditing}
            onFocus={onFocus}
            multiline={1}
          />
        </View>
      ) : (
        <View
          style={[
            styles.mainInputContainer,
            {
              opacity: editable ? 1 : 0.7,
              height: multiline ? null : 45,
              marginBottom: isLast && !showError ? 0 : 10,
              borderColor: showError
                ? BaseColor.red
                : !editable
                ? BaseColor.textGray
                : BaseColor.primary,
            },
            inputContainerStyle,
          ]}>
          {searchIcon ? (
            <Feather
              style={styles.pluseIconCss}
              name={'search'}
              size={20}
              color={BaseColor.primary}
            />
          ) : null}
          <View
            style={[
              {
                width:
                  eyeIcon && !_.isEmpty(iconName)
                    ? '82%'
                    : !_.isEmpty(iconName) || eyeIcon
                    ? '90%'
                    : '95%',
              },
            ]}>
            <TextInput
              {...rest}
              ref={ref}
              selectionColor={BaseColor.black50}
              placeholder={placeholder}
              placeholderTextColor={BaseColor.textGray}
              numberOfLines={numberOfLines}
              style={[
                Typography.placeholder,
                styles.input,
                inputStyle,
                {
                  fontFamily: Files.regex.numberOnly.test(String(value))
                    ? FontFamily.robotoDefault
                    : FontFamily.medium,
                  // width: '100%',
                  marginTop: 8, //
                },
              ]}
              onPressIn={onPressIn}
              onChangeText={onChangeText}
              blurOnSubmit={false}
              onBlur={onBlur}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType || (isLastInput ? 'go' : 'next')}
              secureTextEntry={secureTextEntry}
              editable={editable}
              value={value}
              maxLength={maxLength}
              keyboardType={keyboardType}
              multiline={multiline}
              autoCapitalize={autoCapitalize}
              textAlignVertical={textAlignVertical}
            />
          </View>
        </View>
      )}

      {showError && (
        // Font Size Font Family And Font Color Add in Typography
        <Text style={[Typography.errorMsgText, styles.errorMsgText]}>
          {errorMsg}
        </Text>
      )}
    </View>
  );
});

CInput.propTypes = {
  mainContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  isLastInput: PropTypes.bool,
  onEditPress: PropTypes.func,
  returnKeyType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  editable: PropTypes.bool,
  value: PropTypes.string,
  boolWidth: PropTypes.bool,
  mainTxtStyle: PropTypes.object,
  keyboardType: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  maxLength: PropTypes.number,
  inputStyle: PropTypes.object,
  multiline: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  errorMsg: PropTypes.string,
  phoneInputDisable: PropTypes.bool,
};

CInput.defaultProps = {
  mainContainerStyle: {} || [],
  onSubmitEditing: () => {},
  placeholder: '',
  onChangeText: () => {},
  isLastInput: false,
  onEditPress: () => {},
  returnKeyType: '',
  secureTextEntry: false,
  editable: true,
  value: '',
  boolWidth: false,
  mainTxtStyle: {},
  keyboardType: '',
  placeholderTextColor: '',
  maxLength: 50,
  inputStyle: {},
  multiline: false,
  autoCapitalize: '',
  errorMsg: '',
  phoneInputDisable: false,
};

export default CInput;
