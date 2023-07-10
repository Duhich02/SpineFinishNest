import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./entities/task.entity";

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repository: Repository<Task>) {}

  create(createTaskDto: CreateTaskDto): Promise<CreateTaskDto & Task> {
    return this.repository.save(createTaskDto);
  }

  findAll(): Promise<Task[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Task> {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Promise<UpdateTaskDto & Task> {
    return this.repository.save({ ...updateTaskDto, id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
