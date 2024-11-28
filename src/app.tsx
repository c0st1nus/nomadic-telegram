import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./pages/main_page";
import Story from "./pages/story_page";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../src/pages/parts/footer";
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
  width: calc(100vh * (9 / 16));
  z-index: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #F9F9F9;
  @media (aspect-ratio: 9/16) {
    border-left: 0;
    border-right: 0;
  }
`;

const BackgroundHead = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 34vh;
  background-image: linear-gradient(to bottom, #111111, #313131);
  z-index: -1;
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AnimatedBackground />
      <BrowserRouter>
      <MainApp>
        <BackgroundHead />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/story/:id" element={<Story />} />
        </Routes>
        <Footer Icons={['/Home.svg', '/Heart.svg', '/Bag.svg', '/Notification.svg'] Link}/>
      </MainApp>
    </BrowserRouter>
  </React.StrictMode>
);