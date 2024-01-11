import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { BoardUser } from '../../board-user/entities/board-user.entity';
import { Chat } from '../../chat/entities/chat.entity';
import { Task } from '../../task/entities/task.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  owner: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    onUpdate: 'CURRENT_TIMESTAMP()',
  })
  updated_at: Date;

  @OneToMany(() => BoardUser, (boardUser) => boardUser.board_id)
  board_users: BoardUser[];

  @OneToMany(() => Task, (task) => task.board_id)
  tasks: Task[];

  @OneToOne(() => Chat, (chat) => chat.board_id)
  chat: Chat;
}
