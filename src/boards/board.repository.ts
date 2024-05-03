import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
// @EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  constructor(dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }
  async getBoardById(id: number) {
    return await this.findOneBy({ id });
  }
}
