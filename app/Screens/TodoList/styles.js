/* eslint-disable prettier/prettier */
import { StyleSheet} from 'react-native';
import {BaseColor} from '../../config/theme';
const styles = StyleSheet.create({

  headerTitleInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginBottom: 20,
  },
  pluseIconCss :  {
    // paddingHorizontal: 20
    // marginLeft: 5,
  },
  rowCss: {
     flexDirection: 'row',justifyContent: 'flex-end',
  },
  rowCsss: {
    flexDirection: 'row',justifyContent: 'flex-start', width: '70%',
 },
    main:{
      backgroundColor:BaseColor.primary,
      height: '100%',
      paddingHorizontal: 20,
      elevation:1,
      flex: 1,
    },
    addNewContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 30,
      borderColor: BaseColor.white,
      width: '32%',
      height: 35,
      justifyContent: 'center',
    },
    addNewText:{
      fontSize: 14,
      color:BaseColor.white,
      marginRight: 5,
    },
    firstview: {
         paddingHorizontal: 15,
         backgroundColor : BaseColor.secondary,
         marginBottom: 10,
         borderRadius: 5,
         textAlign: 'center',
         flexDirection: 'row',
         justifyContent: 'space-between',
alignContent: 'center',
paddingVertical: 15,
      },
     flatList:{
 flex: 1,
 marginTop: 20,
      },
     textview: {
        fontSize: 14,
        fontWeight: 'bold',
        color: BaseColor.white,
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems: 'center',
        position:'relative',
        textAlign: 'center',

      },

      modalAdd: {
      padding:10,
      paddingTop: 20,
      },

      textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: BaseColor.white,
        justifyContent: 'center',
        // paddingHorizontal: 20,
        alignItems: 'center',
        position:'relative',
        textAlign: 'center',

      },

      borderCss: {width: '100%', height: 1, backgroundColor: '#fff'},


});
  export default styles;
