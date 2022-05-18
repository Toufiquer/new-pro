import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/page/About/About";
import Appointment from "./component/page/Appointment/Appointment";
import ContactUs from "./component/page/ContactUs/ContactUs";
import Home from "./component/page/Home/Home";
import LogIn from "./component/page/LogIn/LogIn";
import NothingFound from "./component/page/NothingFound/NothingFound";
import Reviews from "./component/page/Reviews/Reviews";
import NavMenu from "./component/Share/NavMenu";

function App() {
    return (
        <div>
            <NavMenu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/appointment" element={<Appointment />}></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
                <Route path="/contactUs" element={<ContactUs />}></Route>
                <Route path="/logIn" element={<LogIn />}></Route>
                <Route path="*" element={<NothingFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
