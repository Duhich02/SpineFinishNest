import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  UsePipes,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto, CreateTaskSchema } from "./dto/create-task.dto";
import { UpdateTaskDto, UpdateTaskSchema } from "./dto/update-task.dto";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Task } from "./entities/task.entity";
import { JoiValidationPipe } from "src/pipes/ValidationPipe";
import { LoggingInterceptor } from "src/interceptors/logging.interceptor";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName } from "src/utils/file-upload";

@ApiTags("Tasks")
@UseGuards(AuthGuard("jwt"))
@ApiBearerAuth()
@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(CreateTaskSchema))
  create(@Body() createTaskDto: CreateTaskDto): Promise<CreateTaskDto & Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(":id")
  @UseInterceptors(LoggingInterceptor)
  findOne(@Param("id", ParseIntPipe) id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }

  @Patch(":id")
  update(
      @Param("id", ParseIntPipe) id: string,
      @Body(new JoiValidationPipe(UpdateTaskSchema)) updateTaskDto: UpdateTaskDto
  ): Promise<UpdateTaskDto & Task> {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: string): Promise<void> {
    return this.tasksService.remove(+id);
  }

  @Post("upload")
  @UseInterceptors(
      FileInterceptor("file", {
        storage: diskStorage({
          destination: "./uploads",
          filename: editFileName,
        }),
      })
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {}
}