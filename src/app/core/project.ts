
export interface Project {
    id: number;
    name: string;
    description: string;
    location: Location;
    contractor: Contractor;
    internalPO: number;
    customerPO: number;
    creationDate: Date;
    dueStartDate: Date;
    dueCompletionDate: Date;
    stage: Stage[];
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

export interface Contractor {
    id: number;
    name: string;
    services: string[];
}

export interface Notes {
    id: number;
    note: string;
    date: Date;
}
