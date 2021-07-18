import { Plan, Status } from "./plan";

export interface Task extends Plan{
    id?: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: Status;
}