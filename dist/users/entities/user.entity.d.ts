import { Comment } from "src/comments/entities/comment.entity";
import { Task } from "src/tasks/entities/task.entity";
export declare class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    comments: Comment[];
    tasks: Task[];
}
