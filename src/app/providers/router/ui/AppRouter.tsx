import { routes } from "@/shared/configs/routerConfig/routerConfig";
import { FC, Suspense } from "react";
import { useRoutes } from "react-router-dom";

export const AppRouter: FC = () => {
  const elements = useRoutes(routes);
  return <Suspense fallback={<div>Loading...</div>}>{elements}</Suspense>;
};
