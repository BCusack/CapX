

export const OAuthSettings = {
    appId: '540aa0f4-4995-4458-8675-4abd4b8bf83a',
    scopes: [
        'user.read',
        'calendars.read'
    ],
    auth: {
        authority: 'https://login.microsoftonline.com/common/',
        validateAuthority: true,
        redirectUri: 'http://localhost:4200/',
        postLogoutRedirectUri: 'http://localhost:4200/',
        navigateToLoginRequestUrl: true,
        loginRediect: true
    }
};
