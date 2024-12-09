export interface Role {
    title: string;
    startDate: string;
    endDate: string | null;
    technologies: string[];
}

export interface Job {
    company: string;
    logo?: string;
    description?: string;
    newName?: string;
    website?: string;
    roles: Role[];
}
