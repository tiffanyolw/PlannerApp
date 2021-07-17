import { Status } from "./Status";

export interface Goal {
    name: string,
    description: string,
    startDate: Date,
    endDate: Date,
    status: Status
}
