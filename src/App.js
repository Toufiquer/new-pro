import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/page/About/About";
import Appointment from "./component/page/Appointment/Appointment";
import ContactUs from "./component/page/ContactUs/ContactUs";
import Home from "./component/page/Home/Home";
import LogIn from "./component/page/LogIn/LogIn";
import SignUp from "./component/page/LogIn/SignUp";
import NothingFound from "./component/page/NothingFound/NothingFound";
import Reviews from "./component/page/Reviews/Reviews";
import NavMenu from "./component/Share/NavMenu";
import RequireAuth from "./component/Share/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./component/page/Dashboard/Dashboard";
import MyAppointment from "./component/page/Dashboard/MyAppointment";
import MyReview from "./component/page/Dashboard/MyReview";
import AllUsers from "./component/page/Dashboard/AllUsers";
import RequireAdmin from "./component/Share/RequireAdmin";
const queryClient = new QueryClient();
function App() {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <NavMenu />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard></Dashboard>
                            </RequireAuth>
                        }
                    >
                        <Route
                            index
                            element={<MyAppointment></MyAppointment>}
                        ></Route>
                        <Route
                            path="myReview"
                            element={<MyReview></MyReview>}
                        ></Route>
                        <Route
                            path="allUsers"
                            element={
                                <RequireAdmin>
                                    <AllUsers></AllUsers>
                                </RequireAdmin>
                            }
                        ></Route>
                    </Route>
                    <Route
                        path="/appointment"
                        element={
                            <RequireAuth>
                                <Appointment />
                            </RequireAuth>
                        }
                    ></Route>
                    <Route path="/reviews" element={<Reviews />}></Route>
                    <Route path="/contactUs" element={<ContactUs />}></Route>
                    <Route path="/logIn" element={<LogIn />}></Route>
                    <Route path="/signUp" element={<SignUp />}></Route>
                    <Route path="*" element={<NothingFound />}></Route>
                </Routes>{" "}
                <ToastContainer />
            </QueryClientProvider>
        </div>
    );
}

export default App;
