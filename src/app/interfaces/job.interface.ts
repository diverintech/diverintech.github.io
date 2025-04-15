export interface Role {
  title: string;
  startDate: string;
  endDate: string | null;
  technologies?: string[];
  description?: string;
}

export interface Job {
  company: string;
  logo?: string;
  newName?: string;
  website?: string;
  roles: Role[];
}
