export interface ToDo {
    id?: number;
    title: string;
    description: string;
    priority: number;
    done?: boolean;
    archive?: boolean;
    deadline: {
        deadlineDate: string;
        notifications?: Array<{
            timeBeforeEvent: number
            notificationId: number;
        }>;
    };
}
