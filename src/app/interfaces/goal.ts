import { Plan, Status } from "./plan";

export interface Goal extends Plan{
    id?: number,
    name: string,
    description: string,
    startDate: Date,
    endDate: Date,
    status: Status
}
