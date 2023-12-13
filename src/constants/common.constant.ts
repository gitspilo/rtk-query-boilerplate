// Async variable names.
export const ACCESS_TOKEN = 'DEMO_ACCESS_TOKEN';
export const REFRESH_TOKEN = 'DEMO_REFRESH_TOKEN';
export const AES_KEY = 'DEMO_AES_KEY';
export const USER_ROLE = 'DEMO_USER_ROLE';

// error
export const TOKEN_EXPIRE_ERROR = 'Token Already Expired';

// Date format
export const DateFormat1 = 'Do MMMM YYYY';
export const DateFormat2 = 'D MMM YYYY';
export const DateFormat3 = 'YYYY-MM-DD';
export const DateFormat4 = 'D MMM YYYY, HH:MM:SS';
export const DateFormat5 = 'MM/DD/YYYY HH:MM:SS';
export const DateFormat6 = 'DD MMMM YYYY';
export const DayMonthFormat = 'DD MMMM';
export const YearFormat = 'YYYY';
export const TimeFormat = 'HH:MM:SS';

// Google map
export const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GMAP_KEY;
export const defaultCenter: any = [20.5937, 78.9629];
export const mapStyleWithoutLabel = [{ elementType: 'labels', stylers: [{ visibility: 'off' }] }];

export interface ProjectTabType {
  title: string;
  value: string;
}

export const vectorColors: string[] = [
  '#043E95',
  '#1F76B5',
  '#1DA7C6',
  '#67C9D7',
  '#A7E1EA',
  '#909090',
  '#9C27DD',
  '#267300',
  '#0070D7',
  '#C25D00',
  '#C98544',
  '#CD00B9',
  '#0066FF',
  '#6398FE',
  '#00DE9D',
  '#00FFFF',
  '#D20000',
  '#A10000'
];
