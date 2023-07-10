import { Comment } from "src/comments/entities/comment.entity";
import { User } from "src/users/entities/user.entity";
export declare class Task {
    id: number;
    title: string;
    user: User;
    comments: Comment[];
}
