import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Favourite, Cart, Notification } from "./Menu";
import { Navbar } from "../components";

const MainPage = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favourite" element={<Favourite />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/notification" element={<Notification />} />
            </Routes>
            <Navbar />
        </>
    );
}

export default MainPage;