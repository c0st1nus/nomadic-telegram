import React from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import { Cart, Favourite, Home, Notification } from "./pages/Menu";
import { Navbar } from "./components";
import StoryPage from "./pages/StoryPage";
import InGamePage from "./pages/InGamePage";

declare global {
    interface Window {
        Telegram: unknown;
    }
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lena';
    src: url('/Lena.ttf') format('truetype');
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    overscroll-behavior-y: none;
    overscroll-behavior-x: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    font-family: 'Lena', sans-serif;
    scrollbar-width: none;
  }
`;

const MainPlane = styled.div`
  overscroll-behavior-y: none;
  position: relative;
  align-self: center;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  max-width: calc(92.433vh * (9 / 16));
  height: 100vh;
  width: calc(100vh * (9 / 16));
  z-index: 1;
  overflow-x: hidden;
  background-color:rgb(217, 217, 217);
  @media (aspect-ratio: 9/16) {
    border-left: 0;
    border-right: 0;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    errorElement: <div>dsaddada</div>,
  },
  {
    path: "/home",
    element: <MainPlane><Home /><Navbar/></MainPlane>,
  },
  {
    path: "/favourite",
    element: <MainPlane><Favourite /><Navbar/></MainPlane>,
  },
  {
    path: "/cart",
    element: <MainPlane><Cart /> <Navbar/> </MainPlane>,
  },
  {
    path: "/notification",
    element: <MainPlane><Notification /><Navbar/></MainPlane>,
  },
  {
    path: "/story/:id",
    element: <MainPlane><StoryPage/></MainPlane>,
  },
  {
    path: "/game/:id",
    element: <MainPlane><InGamePage/></MainPlane>,
  }
]);

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

export default App;

createRoot(document.getElementById("root") as HTMLElement).render(<App />);