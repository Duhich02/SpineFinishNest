import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "src/comments/entities/comment.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  first_name: string;

  @ApiProperty()
  @Column()
  last_name: string;

  @ApiProperty()
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany((type) => Task, (task) => task.user)
  tasks: Task[];
}
