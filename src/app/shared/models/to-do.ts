export interface ToDo {
    id?: number;
    title: string;
    description: string;
    priority: number;
    done?: boolean;
    archive?: boolean;
}
