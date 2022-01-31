import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import HomePage from "../HomePage";

const Router = (): JSX.Element => {
  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default Router;