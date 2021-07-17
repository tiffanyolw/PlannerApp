import { Status } from "./Status";

export interface Goal {
    id?: number,
    name: string,
    description: string,
    startDate: Date,
    endDate: Date,
    status: Status
}
