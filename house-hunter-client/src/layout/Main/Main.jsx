import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="pt-40 md:pt-36">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Main;