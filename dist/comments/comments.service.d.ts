import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Comment } from "./entities/comment.entity";
import { Repository } from "typeorm";
export declare class CommentsService {
    private repository;
    constructor(repository: Repository<Comment>);
    create(createCommentDto: CreateCommentDto): Promise<CreateCommentDto & Comment>;
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<UpdateCommentDto & Comment>;
    remove(id: number): Promise<void>;
}
