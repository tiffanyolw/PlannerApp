export interface Note {
    name: string;
    header: string;
    details: string;
    importance: Importance;
}

export enum Importance {
    NotImportant = "Not Important",
    Important = "Important",
    VeryImportant = "Very Important"
}