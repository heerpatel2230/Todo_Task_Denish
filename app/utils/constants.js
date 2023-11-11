import {Dimensions} from 'react-native';

export const API_BASE_URL = 'https://api.staging.sumize.io/';
export const MAPS_KEY = '';

export const ENABLE_API_LOGS = false;
export const DATE_FORMAT = 'DD/MM/YYYY';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const TOAST_TIMEOUT = 4000;
export const isSmallDevice = Dimensions.get('screen').width <= 360;
