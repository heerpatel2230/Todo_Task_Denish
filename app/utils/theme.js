import {extendTheme} from 'native-base';
//Generate colors palatte with tool: https://smart-swatch.netlify.app/

const BaseTheme = extendTheme({
  colors: {
    primary: {
      50: '#defff6',
      100: '#b3ffee',
      200: '#86fee8',
      300: '#5cfee5',
      400: '#41fde7',
      500: '#35e4d6',
      600: '#25b2ab',
      700: '#157f7e',
      800: '#004b4d',
      900: '#001b1b',
      light: '##defff6',
      main: '#004b4c',
      dark: '#001b1b',
    },
    border: '#E5E5E5',
    white: '#FFF',
    backgroundWhite: '#F5F5F5',
    secondaryText: '#707070',
  },

  components: {
    Text: {
      baseStyle: {
        fontWeight: 'regular',
      },
    },
    Input: {
      defaultProps: {
        selectionColor: 'primary.200',
      },
    },
  },

  fontConfig: {
    NotoSans: {
      100: {
        normal: 'NotoSans-Thin',
        italic: 'NotoSans-ThinItalic',
      },
      200: {
        normal: 'NotoSans-Light',
        italic: 'NotoSans-LightItalic',
      },
      300: {
        normal: 'NotoSans-Regular',
        italic: 'NotoSans-Italic',
      },
      400: {
        normal: 'NotoSans-Regular',
        italic: 'NotoSans-Italic',
      },
      500: {
        normal: 'NotoSans-Medium',
        italic: 'NotoSans-Italic',
      },
      600: {
        normal: 'NotoSans-Medium',
        italic: 'NotoSans-Italic',
      },
      700: {
        normal: 'NotoSans-Bold',
        italic: 'NotoSans-BoldItalic',
      },
      900: {
        normal: 'NotoSans-Black',
        italic: 'NotoSans-BlackItalic',
      },
      950: {
        normal: 'NotoSans-Black',
        italic: 'NotoSans-BlackItalic',
      },
      regular: {
        normal: 'NotoSans-Regular',
        italic: 'NotoSans-Italic',
      },
      medium: {
        normal: 'NotoSans-Medium',
        italic: 'NotoSans-Italic',
      },
      light: {
        normal: 'NotoSans-Light',
        italic: 'NotoSans-LightItalic',
      },
      bold: {
        normal: 'NotoSans-Bold',
        italic: 'NotoSans-BoldItalic',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'NotoSans',
    body: 'NotoSans',
    mono: 'NotoSans',
  },
});

export default BaseTheme;
