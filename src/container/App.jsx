import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Mode from "./Mode";
import Game from "./Game";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Mode />} />
      <Route path="/game">
        <Route path=":mode" element={<Game />} />
      </Route>
    </Route>,
  ),
);

class App extends React.PureComponent {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
