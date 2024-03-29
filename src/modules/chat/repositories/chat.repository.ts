import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Chat } from '@modules/chat/entities/chat.entity';

@Injectable()
export class ChatRepository extends Repository<Chat> {
  constructor(private dataSource: DataSource) {
    super(Chat, dataSource.createEntityManager());
  }
}
