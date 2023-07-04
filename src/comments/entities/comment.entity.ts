import { ApiProperty } from "@nestjs/swagger";
import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  description: string;

  @ManyToOne((type) => User, (user) => user.comments)
  user: User;

  @ManyToOne((type) => Task, (task) => task.comments, { eager: true })
  task: Task;
}
