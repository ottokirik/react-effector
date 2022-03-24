import {
  createEffect,
  createEvent,
  createStore,
  forward,
  guard,
  restore,
  sample,
} from "effector";
import { createGate } from "effector-react";
import {
  getAllPosts,
  getPost,
  getPostComments,
} from "../services/posts.api.service";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// ВСЕ ПОСТЫ

export const PostsGate = createGate();
export const getAllPostsFx = createEffect(async () => getAllPosts());

forward({
  from: PostsGate.open,
  to: getAllPostsFx,
});

export const $posts = createStore<IPost[]>([]).on(
  getAllPostsFx.doneData,
  (_, data) => data
);

// ПОСТ

const clearPost = createEvent();
export const PostGate = createGate<{ id: number }>();
export const getPostFx = createEffect<{ id: number }, IPost>(async ({ id }) =>
  getPost(id)
);

PostGate.close.watch(() => clearPost());

guard({
  clock: PostGate.state,
  filter: ({ id }) => !!id,
  source: PostGate.state,
  target: getPostFx,
});

export const $post = restore<IPost>(getPostFx.doneData, {} as IPost).reset(
  clearPost
);

// КОММЕНТАРИИ

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const CommentsGate = createGate<{ id: number }>();
export const getPostCommentsFx = createEffect<{ id: number }, IComment[]>(
  async ({ id }) => getPostComments(id)
);
const clearComments = createEvent();

CommentsGate.close.watch(() => clearComments());

sample({
  clock: getPostFx.doneData,
  source: CommentsGate.state,
  target: getPostCommentsFx,
});

export const $comments = restore(getPostCommentsFx.doneData, []).reset(
  clearComments
);
