export interface ToDo {
    id?: number;
    title: string;
    description: string;
    priority: number;
    done?: boolean;
    archive?: boolean;
    deadline: {
        date: string;
        time: string;
        notifications?: Array<{
            timeBeforeEvent: number
            noteficationId: number;
        }>;
    };
}
