import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Cars from "../pages/cars/Cars";
import SingleCar from "../pages/single-car/SingleCar";
import Main from "../pages/single-car/main/Main";
import Brand from "../pages/brand/Brand";
import Album from "../pages/album/index.jsx";
import Cards from "../pages/cars/Cars";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="main/*" element={<Main />}>
          <Route index element={<Cars />} />
          <Route path="single-car/:id" element={<SingleCar />} />
          <Route path="brand" element={<Brand />} />
          <Route path="album" element={<Album />} />
          <Route path="cards" element={<Cards />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
