import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from '../../prisma/prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async getPosts(): Promise<Post[]> {
    const allPosts = await this.prisma.post.findMany();

    if (!allPosts) throw new BadRequestException('Error retrieving the Posts');

    return allPosts;
  }

  async getPostById(id: number): Promise<Post> {
    const post = await this.prisma.post.findFirstOrThrow({
      where: {
        id: id,
      },
    });

    return post;
  }

  async createPost(userId: number, createPostInput: CreatePostInput) {
    try {
      const newPost = await this.prisma.post.create({
        data: {
          user_id: userId,
          title: createPostInput.title,
          body: createPostInput.body,
        },
      });

      return {
        post_id: newPost.id,
        title: newPost.title,
        body: newPost.body,
      };
    } catch (error) {
      throw new BadRequestException(
        `Failed to create the post: ${error.message}`,
      );
    }
  }

  async updatePost(id: number, updatePostInput: UpdatePostInput) {
    try {
      const updatedPost = await this.prisma.post.update({
        where: {
          id: updatePostInput.post_id,
          user_id: id,
        },
        data: {
          title: updatePostInput.title,
          body: updatePostInput.body,
        },
      });

      return {
        post_id: updatedPost.id,
        title: updatedPost.title,
        body: updatedPost.body,
      };
    } catch (error) {
      throw new NotFoundException(`Failed to update user: ${error.message}`);
    }
  }

  async removePost(id: number, postId: number) {
    try {
      const deletedPost = await this.prisma.post.delete({
        where: {
          id: postId,
          user_id: id,
        },
      });

      return {
        post_id: deletedPost.id,
      };
    } catch (error) {
      throw new NotFoundException(`Post not found: ${error.message}`);
    }
  }
}
