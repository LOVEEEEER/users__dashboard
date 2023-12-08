import { RouteObject } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";

export enum RoutePath {
  MAIN = "/",
}

export const routes: RouteObject[] = [
  {
    path: RoutePath.MAIN,
    element: <MainPage />,
  },
];
