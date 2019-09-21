
export interface Project {
    id: number;
    name: string;
    description: string;
    location: Location;
    contractors: Contact[];
    internalPO: number;
    customerPO: number;
    creationDate: Date;
    dueStartDate: Date;
    dueCompletionDate: Date;
    stackHolders: Contact[];
    stage: Stage;
    notes: Notes[];
}

export interface Location {
    id: number;
    name: string;
    description: string;
}

export interface Stage {
    id: number;
    name: string;
    description: string;
    complete: boolean;
    color: string;
}

export interface Contact {
    id: number;
    name: string;
    email: string;
}

export interface Notes {
    id: number;
    note: string;
    date: Date;
}
