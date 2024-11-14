import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main_page";
import Story from "./pages/story_page";
import styled, { createGlobalStyle } from "styled-components";
import AnimatedBackground from "./components/animated_background";

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
    background-color: #A69A69;
    overflow: hidden;
    position: relative;
    font-family: 'Lena', sans-serif;
    scrollbar-width: none;
  }
`;

const MainApp = styled.div`
  overscroll-behavior-y: none;
  position: relative;
  border-left: rgba(0, 0, 0, 0.3) solid 0.4vh;
  border-right: rgba(0, 0, 0, 0.3) solid 0.4vh;
  align-self: center;
  padding: 0;
  margin: 0;
  height: 100vh;
  background: linear-gradient(to bottom, #BBD4FA 0%, #9E8635 79%);
  width: calc(100vh * (9 / 16));
  z-index: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (aspect-ratio: 9/16) {
    border-left: 0;
    border-right: 0;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AnimatedBackground />
    <BrowserRouter>
      <MainApp>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/story/:id" element={<Story />} />
        </Routes>
      </MainApp>
    </BrowserRouter>
  </React.StrictMode>
);