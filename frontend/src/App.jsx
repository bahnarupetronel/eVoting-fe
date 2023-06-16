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
import ValidateAccountPage from "./components/user/ValidateAccountPage";
import UserContainer from "./components/user/UserContainer";
import News from "./components/news/News";

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
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/vote/locations" element={<VoteLocations />} />
          <Route
            path="/reset-password"
            element={
              // <ProtectedRoute>
              <ResetPassword />
              // </ProtectedRoute>
            }
          />
          <Route path="user/:userId">
            <Route
              index={true}
              element={
                // <ProtectedRoute>
                <User />
                // </ProtectedRoute>
              }
            />
            <Route
              path="vote/history"
              index={false}
              element={
                // <ProtectedRoute>
                <UserVoteHistory />
                // </ProtectedRoute>
              }
            />
            <Route
              path="validate-account"
              index={false}
              element={
                // <ProtectedRoute>
                <ValidateAccountPage />
                // </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />
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
        </Routes>
      </UserContextProvider>
    </Interceptor>
  );
}

export default App;
