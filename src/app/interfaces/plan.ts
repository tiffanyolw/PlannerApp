export interface Plan {
    id?: number,
    name: string,
    description: string,
    startDate: Date,
    endDate: Date,
    status: Status
}

export enum Status {
    Complete = "Complete",
    Incomplete = "Incomplete"
}
