import { APIRequestContext } from '@playwright/test';

export class PostsService {
  constructor(private request: APIRequestContext) {}

  async createPost(data: { title: string; body: string; userId: number }) {
    return await this.request.post('/posts', {
      data
    });
  }
}