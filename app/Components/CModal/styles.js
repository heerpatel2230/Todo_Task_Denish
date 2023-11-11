import {StyleSheet} from 'react-native';
import {BaseColor} from '../../config/theme';
import {isTab} from '../../config/MQ';
const styles = StyleSheet.create({
  textHead: {
    fontSize: 16,
    color: BaseColor.primary,
    fontWeight: '800',
    textAlign: 'center',
  },
  backgroundContainer: {
    flex: 1,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  popUpContainer: {
    flex: 1,
    zIndex: 10,
    // backgroundColor: BaseColor.black90,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
    // backgroundColor: BaseColor.whiteColor,
    // elevation: 10,
    alignSelf: 'center',
  },
  modalMainView: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 10,
    // alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,.6)',
  },
  drawerModalMainView: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 10,
    flexDirection: 'row',
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,

    // alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,.6)',
  },
  modalView: {
    backgroundColor: BaseColor.whiteColor,
    elevation: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    // height: 200,
    // width: '100%',
  },
  drawerModalView: {
    backgroundColor: BaseColor.whiteColor,
    flex: 3,
    elevation: 15,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    // height: 200,
    // width: '100%',
  },

  modalTopGradientContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    zIndex: -100,
  },
  drawerModalTopGradientContainer: {
    position: 'absolute',
    top: 20,
    right: 0,
    zIndex: -100,
  },
  modalBottomGradientContainer: {
    position: 'absolute',
    bottom: 20,
    // left: 0,
    right: 0,
    zIndex: -100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  drawerModalBottomGradientContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    zIndex: -100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  successModalContainer: {
    width: '90%',
    // height: 250,
    borderRadius: 10,
    backgroundColor: BaseColor.whiteColor,
    elevation: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  popUpChildrenContainer: {
    padding: 30,
  },

  // Congratulation Modal
  selfieVideoUploadModalContainer: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successLogo: {
    resizeMode: 'contain',
  },
  selfieVideoUploadTitleText: {
    marginTop: 20,
  },

  // warning Modal Styles
  warningModalContainer: {
    width: '85%',
    height: '70%',
    borderRadius: 10,
    backgroundColor: BaseColor.whiteColor,
    elevation: 10,
    // alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
  },
  waringHeaderTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  warningDescriptionTitleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningBtnContainer: {
    marginTop: 30,
    width: '100%',
  },
  errorIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Delete Modal
  deleteModal: {
    width: '85%',
    padding: 30,
    borderRadius: 10,
    backgroundColor: BaseColor.whiteColor,
    elevation: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIconContainer: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: BaseColor.redDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteBtnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  //Success Modal
  successIcon: {
    height: isTab ? 100 : 80,
    width: isTab ? 100 : 80,
    borderRadius: 80,
    backgroundColor: BaseColor.userRoleSelectedIcon,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // detailModalContainer
  detailModalContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  detailModalHeaderTextContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailModalLeftContainer: {
    width: '60%',
  },
  detailModalRightContainer: {
    width: '40%',
  },
  detailModalDescriptionContainer: {
    justifyContent: 'space-between',
  },
  detailModalDescriptionTextContainer: {
    width: '100%',
    marginTop: 20,
  },

  detailModalBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  detailModalBtn: {
    width: '48%',
  },

  // Details Modal Column Btn styles
  detailsModalPayNowBtn: {
    marginTop: 20,
  },
  detailsModalColumnBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  // UpComing Loan Modal

  upComingLoanModalContainer: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  upComingLoanTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  upComingLoanModalSliderContainer: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  track: {
    height: 15,
    borderRadius: 7,
    backgroundColor: '#DFFEFC',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: BaseColor.whiteColor,
    // borderColor: BaseColor.whiteColor,
    // borderWidth: 7,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
  //Confirmation Modal Styles
  confirmationModalContainer: {
    padding: 30,
  },
  confirmationModalBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  confirmationModalBtn: {
    width: '48%',
  },

  // simple Alert Modal Styles
  simpleAlertModalContainer: {
    padding: 30,
  },

  // Permission Modal styles
  permissionModalContainer: {
    padding: 30,
  },

  permissionTextContainer: {
    paddingVertical: 30,
  },
  permissionBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  permissionBtn: {
    width: '48%',
  },

  // Enable Permission Modal Styles
  enablePermissionModalContainer: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },

  // ReferModal styles
  referModal: {
    // padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  imgContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  img: {
    height: isTab ? 400 : 210,
    width: isTab ? '80%' : 350,
    resizeMode: 'contain',
  },
  referCodeContainer: {
    // flex: 1,
    // height: isTab ? 120 : 80,
    // marginVertical: 10,
    marginTop: isTab ? 40 : 30,
    marginBottom: isTab ? 20 : 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink'
  },
  referCode: {
    height: isTab ? 70 : 50,
    width: '50%',
    backgroundColor: BaseColor.primaryLightGreen,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: BaseColor.greenColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  referCodeTxt: {
    fontSize: 16,
    color: BaseColor.greenColor,
  },
  shareCodeContainer: {
    // flex: 1,
    // height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  shareCodeTxt: {
    flexWrap: 'wrap',
    textAlign: 'center',
    color: BaseColor.idText,
  },
  descriptionTxtContainer: {
    // flex:1,
    // width: '90%',
    paddingHorizontal: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  referBtnContainer: {
    // flex:1,
    // height: 50,
    margin: isTab ? 40 : 15,
  },
  shareTxtContainer: {
    // height: 50,
    paddingLeft: isTab ? 40 : 20,
  },
  socialIconContainer: {
    // height: 50,
    paddingVertical: 10,
    paddingHorizontal: isTab ? 40 : 20,
    // backgroundColor: 'pink',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  // Selfie Rules
  selfieRuleView: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 10,
    backgroundColor: BaseColor.whiteColor,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    // height: 200,
    // width: '100%',
  },
  LottieView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: 400,
    width: 60,
  },

  // KYC Modal
  kycModal: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitleTxt: {
    flexWrap: 'wrap',
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
  },
  mainCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '45%',
    height: isTab ? 150 : 105,
    // backgroundColor: BaseColor.whiteColor,
    margin: isTab ? 10 : 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: BaseColor.whiteColor,
    height: '100%',
    width: '100%',
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCard: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LottieView: {
    position: 'absolute',
    paddingVertical: 15,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //
  pdfPasswordModal: {
    padding: 20,
  },
});

export default styles;
