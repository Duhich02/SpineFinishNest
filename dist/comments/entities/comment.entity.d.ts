import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";
export declare class Comment {
    id: number;
    description: string;
    user: User;
    task: Task;
}
