
import { Timestamp } from '@firebase/firestore-types';



export interface Project {
    id?: string;
    title: string;
    description: string;
    owner: Contact;
    location: Location;
    contractors: Contact[];
    internalPO?: string;
    customerPO?: string;
    WKO?: string;
    creationDate?: Timestamp;
    dueStartDate?: Timestamp;
    dueCompletionDate?: Timestamp;
    stakeHolders?: Contact[];
    stage?: string;
    notes?: Notes[];
}

export interface Location {
    id?: number;
    name: string;
    description: string;
}

export interface Stage {
    id?: number;
    name: string;
    description: string;
    complete: boolean;
    color: string;
}

export interface Contact {
    id?: number;
    name: string;
    email: string;
}

export interface Notes {
    id?: number;
    note: string;
    date: Timestamp;
}
