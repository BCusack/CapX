import { environment } from 'src/environments/environment';

export const OAuthSettings = {
    appId: environment.graph.appID,
    scopes: [
        'user.read',
        'calendars.read'
    ]
};
