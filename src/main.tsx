import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { MovieDetailPage } from "./pages/MovieDetailPage.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
  {
    element: <MovieDetailPage />,
    path: "/movie/:id",
  },
  {
    element: <NotFoundPage />,
    path: "*",
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
