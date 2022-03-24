import { RouteObject, useRoutes } from "react-router-dom";
import { Post } from "../post/post";
import { Posts } from "../posts/posts";

export enum Paths {
  Home = "/",
  Post = "/posts",
  Default = "*",
}

export const AppRouter = () => {
  const appRoutes: RouteObject[] = [
    { path: Paths.Home, element: <Posts /> },
    { path: `${Paths.Post}/:id`, element: <Post /> },
    { path: Paths.Default, element: <Posts /> },
  ];

  const appRouter = useRoutes(appRoutes);

  return <>{appRouter}</>;
};
