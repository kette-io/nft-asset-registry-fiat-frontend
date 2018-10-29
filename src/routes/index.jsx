import LandingPage from "views/LandingPage/LandingPage.jsx";
import RegisterPage from "views/RegisterPage/StripeRegisterPage.jsx";
import SearchResultPage from "../views/SearchResultPage/SearchResultPage";

var indexRoutes = [
  { path: "/register-page", name: "RegisterPage", component: RegisterPage },
  { path: "/searchResult-page", name: "SearchResultPage", component: SearchResultPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
