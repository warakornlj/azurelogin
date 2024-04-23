//my-app/src/authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
// Msal Configurations
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/common',
    clientId: '<clientId>',
    tenantId: '<tenantId>',
    clientSecret: '<clientSecret>',
    redirectUri: 'http://localhost:3000/'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
// Authentication Parameters
const authenticationParameters = {
  scopes: [
    // 'user.read',
    // 'calendars.readwrite'
  ]
}
 
// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)