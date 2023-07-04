import { Injectable } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment } from "./entities/comment.entity";
import { Repository } from "typeorm";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private repository: Repository<Comment>
  ) {}

  create(createCommentDto: CreateCommentDto) {
    return this.repository.save(createCommentDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.repository.save({ ...updateCommentDto, id });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
