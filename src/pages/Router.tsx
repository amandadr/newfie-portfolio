import { useRoutes } from "hookrouter";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import ProjectsPage from "pages/ProjectsPage";
import ContactPage from "pages/ContactPage";
import BlogPage from "pages/BlogPage";
import NotFoundPage from "pages/NotFoundPage";

const routes = {
  "/": () => <HomePage />,
  "/about": () => <AboutPage />,
  "/projects": () => <ProjectsPage />,
  "/contact": () => <ContactPage />,
  "/blog": () => <BlogPage />,
  "/404": () => <NotFoundPage />,
};

const Router = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
};

export default Router;