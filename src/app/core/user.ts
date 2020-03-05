export class User {
    displayName: string;
    email: string;
    avatar: string;
}

export interface GraphUser {
    businessPhones: [
        string
    ];
    displayName: string;
    givenName: string;
    jobTitle: string;
    mail: string;
    mobilePhone: string;
    officeLocation: string;
    preferredLanguage: string;
    surname: string;
    userPrincipalName: string;
    id: string;
}
