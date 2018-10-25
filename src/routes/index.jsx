import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import RegisterPage from "views/RegisterPage/StripeRegisterPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SearchResultPage from "../views/SearchResultPage/SearchResultPage";

var indexRoutes = [
  { path: "/all-components", name: "Components", component: Components },
  { path: "/register-page", name: "RegisterPage", component: RegisterPage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/searchResult-page", name: "SearchResultPage", component: SearchResultPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
