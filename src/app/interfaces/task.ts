import { Status } from "./Status";

export interface Task {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: Status;
}