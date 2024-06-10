import { Routes, Route } from "react-router-dom";
import routes from "./constant";

export default function RouterConfig() {
  return (
    <Routes>
      {routes &&
        routes.map((route, index) => {
          const Component = route.Component;
          return (
            <Route key={`routes${route.id}`} path={route.path} element={<Component />} />
          );
        })}
    </Routes>
  );
}
