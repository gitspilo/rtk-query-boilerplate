

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const GET_GEOSERVER_WMS_URL = `${BASE_URL}/geoserver/wms`;
export const GET_GEOSERVER_WMTS_URL = `${BASE_URL}/geoserver/wmts`;

// auth
export const RSA_URL = `${BASE_URL}/rsa`;
export const LOGIN_URL = `${BASE_URL}/login`;
export const LOGOUT_URL = `${BASE_URL}/logout`;
export const RESET_PASSWORD_REQUEST_URL = `${BASE_URL}/resetpasswordrequest`;
export const RESET_PASSWORD_URL = `${BASE_URL}/resetpassword`;
export const RSA_ENCRYPT_URL = `${BASE_URL}/RSA-encrypt`;
export const RSA_DECRYPT_URL = `${BASE_URL}/RSA-decrypt`;
export const AES_ENCRYPT_URL = `${BASE_URL}/aes-encrypt`;
export const AES_DECRYPT_URL = `${BASE_URL}/aes-decrypt`;
export const AES_KEY_URL = `${BASE_URL}/encrypt/`;
export const REFRESH_BOTH_TOKEN = `${BASE_URL}/refresh_both_tokens`;
