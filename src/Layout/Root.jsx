import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/NavBar";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <div className="min-h-[calc(100vh-330px)]">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;