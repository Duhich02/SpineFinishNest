import { CreateTaskDto } from "./create-task.dto";
import { Comment } from "src/comments/entities/comment.entity";
declare const UpdateTaskDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTaskDto>>;
export declare class UpdateTaskDto extends UpdateTaskDto_base {
    title?: string;
    comments?: Comment[];
}
export {};
