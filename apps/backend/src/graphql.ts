
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AuthSignupInput {
    username: string;
    password: string;
    email: string;
}

export class AuthLoginInput {
    username: string;
    password: string;
}

export class CreateUserRoleInput {
    role: ConnectRoleInput;
}

export class ConnectRoleInput {
    id: number;
}

export class CreateGroupPostInput {
    title: string;
    body: string;
    userIds: number[];
}

export class UpdateGroupPostInput {
    title: string;
    body: string;
    userIds: number[];
}

export class CreatePostInput {
    title: string;
    body: string;
}

export class UpdatePostInput {
    post_id: number;
    title: string;
    body: string;
}

export class UpdateUserInput {
    username: string;
    fullname?: Nullable<string>;
    bio?: Nullable<string>;
}

export abstract class IQuery {
    abstract user(): User | Promise<User>;

    abstract getGroupPosts(): Nullable<GroupPost>[] | Promise<Nullable<GroupPost>[]>;

    abstract getGroupPostById(id: number): Nullable<GroupPost> | Promise<Nullable<GroupPost>>;

    abstract getPosts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract getPostById(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract getUsers(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract getUserById(id: string): User | Promise<User>;
}

export abstract class IMutation {
    abstract signup(dto: AuthSignupInput): Tokens | Promise<Tokens>;

    abstract login(dto: AuthLoginInput): Tokens | Promise<Tokens>;

    abstract logout(userId: number): boolean | Promise<boolean>;

    abstract refresh(userId: number, refreshToken: string): Tokens | Promise<Tokens>;

    abstract createGroupPost(createGroupPostInput: CreateGroupPostInput): GroupPost | Promise<GroupPost>;

    abstract updateGroupPost(userId: number, postId: number, updateGroupPostInput: UpdateGroupPostInput): GroupPost | Promise<GroupPost>;

    abstract removeGroupPost(userId: number, postId: number, userIds: number[]): GroupPost | Promise<GroupPost>;

    abstract createPost(id: number, createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(id: number, updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number, postId: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract userUpdate(id: string, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract userRemove(id: string): boolean | Promise<boolean>;

    abstract adminRemoveUser(id: string): string | Promise<string>;

    abstract updateRole(id: string, roleId: number): string | Promise<string>;
}

export class Tokens {
    access_token: string;
    refresh_token: string;
}

export class JwtPayload {
    sub: number;
    username: string;
    email: string;
    role_name: string;
}

export class JwtPayloadWithRt {
    sub: number;
    username: string;
    email: string;
    refreshToken: string;
}

export class GroupPost {
    title: string;
    body: string;
    created_at: Date;
    updated_at: Date;
    users: User[];
}

export class User {
    id: number;
    group_post: GroupPost[];
    username: string;
    email?: Nullable<string>;
    fullname?: Nullable<string>;
    picture_url?: Nullable<string>;
    bio?: Nullable<string>;
    date_registration?: Nullable<Date>;
    password_hash?: Nullable<string>;
    refresh_token?: Nullable<string>;
    post_count?: Nullable<number>;
    comment_count?: Nullable<number>;
    user_subscriptions?: Nullable<number>;
}

export class Post {
    post_id: number;
    user_id: number;
    title: string;
    body: string;
    created_at: Date;
    update_at: Date;
}

type Nullable<T> = T | null;
