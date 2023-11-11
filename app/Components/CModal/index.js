/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import CButton from '../CButton';
import PropTypes from 'prop-types';
// import CToast from '../CToast';
import * as Animatable from 'react-native-animatable';

const CModal = forwardRef((props, ref) => {
  const {
    children,
    childrenViewStyle = {},
    onRequestClose = () => {},
    modalMainStyle = {},
    visible,
    modalViewStyle,
    deleteModal,
    deleteTitle,
    onPressNo,
    onPressYes,
    deleteModalLoader,
    backHandleDisable = false,
  } = props;

  const toasterRef = useRef();
  useImperativeHandle(ref, () => ({
    showPopToast(val) {
      toasterRef.current.show(val);
    },
    showToast(val) {
      toasterRef.current.show(val, true);
    },
  }));

  const [shakeEnabled, setShakeEnabled] = useState(false);

  const onRequestCloseFunc = () => {
    if (backHandleDisable) {
      setShakeEnabled(!shakeEnabled);
    } else {
      onRequestClose();
    }
  };

  return (
    <>
      {deleteModal ? (
        // Pop-Up Modal with Toaster
        <Modal
          visible={visible}
          animationType="fade"
          transparent
          onRequestClose={onRequestClose}
          style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={onRequestClose}>
            <View style={styles.backgroundContainer}>
              {visible ? (
                <BlurView
                  style={styles.blurView}
                  blurType="dark"
                  blurAmount={4}
                  reducedTransparencyFallbackColor="white"
                />
              ) : null}
              <TouchableOpacity activeOpacity={1} style={styles.deleteModal}>
                <View style={styles.waringHeaderTextContainer}>
                  <Text style={[styles.textHead]}>{deleteTitle}</Text>
                </View>
                <View style={styles.deleteBtnContainer}>
                  <CButton
                    title="No"
                    disabled={deleteModalLoader}
                    handleButtonPress={onPressNo}
                    btnStyle={{width: 100, marginRight: 20}}
                  />
                  <CButton
                    title="Yes"
                    disabled={deleteModalLoader}
                    loader={deleteModalLoader}
                    handleButtonPress={onPressYes}
                    btnStyle={{width: 100}}
                  />
                </View>
              </TouchableOpacity>

              {/* <CToast ref={toasterRef} /> */}
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      ) : (
        // Bottom Modal
        <Modal
          animationType="fade"
          transparent
          visible={visible}
          onRequestClose={onRequestCloseFunc}
          style={{flex: 1}}>
          <View style={{flex: 1}}>
            {visible
              ? null
              : // <BlurView
                //   style={{
                //     position: 'absolute',
                //     top: 0,
                //     left: 0,
                //     bottom: 0,
                //     right: 0,
                //     zIndex: 1,
                //     // height: 50,
                //   }}
                //   blurType="dark"
                //   blurAmount={4}
                //   reducedTransparencyFallbackColor="white"
                // />
                null}
            <View style={[styles.modalMainView, modalMainStyle]}>
              <TouchableOpacity
                onPress={onRequestCloseFunc}
                style={{flex: 1}}
              />

              <Animatable.View
                animation={shakeEnabled && 'wobble'}
                style={[styles.modalView, modalViewStyle]}>
                <View style={[childrenViewStyle]}>{children}</View>
              </Animatable.View>
              {/* <CToast ref={toasterRef} /> */}
            </View>
          </View>
        </Modal>
      )}
    </>
  );
});

CModal.propTypes = {
  childrenViewStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onRequestClose: PropTypes.func,
  modalMainStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  visible: PropTypes.bool,
  modalViewStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  iName: PropTypes.string,

  //Delete Modal Props
  deleteModal: PropTypes.bool,
  deleteIcon: PropTypes.bool,
  deleteTitle: PropTypes.string,
  deleteDescription: PropTypes.string,
  onPressNo: PropTypes.func,
  onPressYes: PropTypes.func,
  deleteModalLoader: PropTypes.bool,

  // Confirmation Modal
  confirmationModal: PropTypes.bool,
  confirmationTitle: PropTypes.string,
  confirmationDescription: PropTypes.string,
  noteTitle: PropTypes.string,
  noteTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  fill: PropTypes.bool,
  confirmationDisabled: PropTypes.bool,
  confirmationLoader: PropTypes.bool,
  leftFill: PropTypes.bool,
  leftBtnText: PropTypes.string,
  rightBtnText: PropTypes.string,
  onPressRight: PropTypes.func,
  onPressLeft: PropTypes.func,

  // permission Enable  Modal
  enablePermissionModal: PropTypes.bool,
  onPressEnable: PropTypes.func,
};

CModal.defaultProps = {
  childrenViewStyle: {},
  onRequestClose: () => {},
  modalMainStyle: {},
  visible: false,
  modalViewStyle: {},

  iName: '',
  warningTitle: '',
  warningDescription: '',
  warningLink: '',

  //Delete Modal Props
  deleteModal: false,
  deleteIcon: false,
  deleteTitle: '',
  deleteDescription: '',
  onPressNo: () => {},
  onPressYes: () => {},
  deleteModalLoader: false,

  // Confirmation Modal
  confirmationModal: false,
  confirmationTitle: '',
  confirmationDescription: '',
  noteTitle: '',
  noteTitleStyle: {},
  fill: false,
  confirmationDisabled: false,
  confirmationLoader: false,
  leftFill: false,
  leftBtnText: 'No',
  rightBtnText: 'Yes',
  onPressRight: () => {},
  onPressLeft: () => {},

  // permission Enable  Modal
  enablePermissionModal: false,
  onPressEnable: () => {},
};
export default CModal;
