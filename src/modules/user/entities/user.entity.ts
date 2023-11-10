import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AuthRefreshToken } from 'src/modules/auth/entities/auth-refresh-token.entity';
import { BoardUser } from 'src/modules/board-user/entities/board-user.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_active: boolean;

  @Column({ nullable: true })
  activate_token: string;

  @Column({ default: 0 })
  attemts_login: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  last_logged_at: Date;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => null,
  })
  block_login_at: Date;

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

  @OneToMany(() => AuthRefreshToken, (token) => token.user_id)
  users: AuthRefreshToken[];

  @OneToMany(() => BoardUser, (boardUser) => boardUser.user_id)
  board_users: BoardUser[];
}