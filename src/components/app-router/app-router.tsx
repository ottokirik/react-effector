import { RouteObject, useRoutes } from "react-router-dom";
import { Post } from "../post/post";
import { Posts } from "../posts/posts";

export enum Paths {
  Home = "/",
  Post = "/posts",
}

export const AppRouter = () => {
  const appRoutes: RouteObject[] = [
    { path: Paths.Home, element: <Posts /> },
    { path: `${Paths.Post}/:id`, element: <Post /> },
  ];
  const appRouter = useRoutes(appRoutes);

  return <>{appRouter}</>;
};
