import { Route, Routes } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Register from "./components/authentication/register/Register";
import Login from "./components/authentication/login/LoginPage";
import Logout from "./components/authentication/logout/Logout";
import Home from "./components/home/Home";
import NavBar from "./shared/components/navbar/NavBar";
import Results from "./components/results/Results";
import User from "./components/user/User";
import { UserContextProvider } from "./context/user/UserContext.jsx";
import { Interceptor } from "./context/user/http/Interceptor.jsx";
import ResetPassword from "./components/authentication/reset-password/ResetPassword";
import About from "./components/about/About";
import Vote from "./components/vote/Vote";
import VoteLocations from "./components/vote/VoteLocations";
import UserVoteHistory from "./components/vote/UserVoteHistory";
import LiveResultsMap from "./components/results/LiveResultsMap";
import Form1 from "./components/authentication/register/Form1";
import Form2 from "./components/authentication/register/Form2";
import Form3 from "./components/authentication/register/Form3";
import Confirm from "./components/authentication/register/Confirm";

import { ProtectedRoute } from "./shared/context/ProtectedRoute";
import "./App.css";
import { NotificationContainer } from "react-notifications";

import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/"
);

function App() {
  return (
    <Interceptor>
      <UserContextProvider>
        <NotificationContainer />
        <NavBar />
        <Toolbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/form1" element={<Form1 />} />
          <Route path="/register/form2" element={<Form2 />} />
          <Route path="/register/form3" element={<Form3 />} />
          <Route path="/register/confirm" element={<Confirm />} />
          <Route path="/about" element={<About />} />
          <Route path="/vote/locations" element={<VoteLocations />} />
          <Route
            path="/logout"
            element={
              // <ProtectedRoute>
              <Logout />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              // <ProtectedRoute>
              <ResetPassword />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/user/:userId"
            element={
              // <ProtectedRoute>
              <User />
              // </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/results/live"
            element={
              // <ProtectedRoute>
              <LiveResultsMap />
              // </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/vote"
            element={
              // <ProtectedRoute>
              <Vote />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/user/vote/history"
            element={
              // <ProtectedRoute>
              <UserVoteHistory />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </UserContextProvider>
    </Interceptor>
  );
}

export default App;
