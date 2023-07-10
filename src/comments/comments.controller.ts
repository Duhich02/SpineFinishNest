import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors} from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { ApiTags, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { Comment } from "./entities/comment.entity";
import {LoggingInterceptor} from "../interceptors/logging.interceptor";

@ApiTags("Comments")
@ApiBearerAuth()
@Controller("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiResponse({
    status: 201,
    description: "Комментарий создан",
    type: Comment,
  })
  @ApiResponse({ status: 401, description: "Неавторизованно" })
  @Post()
  create(@Body() createCommentDto: CreateCommentDto): Promise<CreateCommentDto & Comment> {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Get(":id")
  @UseInterceptors(LoggingInterceptor)
  findOne(@Param("id", ParseIntPipe) id: string): Promise<Comment> {
    return this.commentsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCommentDto: UpdateCommentDto
  ): Promise<UpdateCommentDto & Comment> {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.commentsService.remove(+id);
  }
}
