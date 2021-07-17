import { Status } from "./Status";

export interface Task {
    id?: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: Status;
}