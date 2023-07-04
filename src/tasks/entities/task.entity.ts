import { Comment } from "src/comments/entities/comment.entity";
import { User } from "src/users/entities/user.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne((type) => User, (user) => user.tasks)
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.task)
  comments: Comment[];
}
