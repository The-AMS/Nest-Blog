import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly repository: Repository<Post>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  create(post: Partial<Post>) {
    return this.repository.save(post);
  }

  update(id: string, post: Partial<Post>) {
    return this.repository.update(id, post);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
