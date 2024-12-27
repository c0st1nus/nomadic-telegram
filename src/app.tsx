import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import MainPage from "./pages/MainPage";

declare global {
    interface Window {
        Telegram: any;
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
  overflow-y: scroll;
  max-width: calc(92.433vh * (9 / 16));
  height: 100vh;
  /* width: calc(100vh * (9 / 16)); */
  z-index: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #F9F9F9;
  @media (aspect-ratio: 9/16) {
    border-left: 0;
    border-right: 0;
  }
`;

createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <MainPlane>
          <Routes>
            <Route path="*" element={<MainPage />} />
          </Routes>
        </MainPlane>
      </BrowserRouter>
    </React.StrictMode>
  );