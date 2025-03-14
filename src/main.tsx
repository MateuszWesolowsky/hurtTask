import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Spinner } from "./components/Spinner.tsx";

const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage.tsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.tsx"));

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
  {
    element: (
      <Suspense fallback={<Spinner />}>
        <MovieDetailPage />
      </Suspense>
    ),
    path: "/movie/:id",
  },
  {
    element: (
      <Suspense fallback={<Spinner />}>
        <NotFoundPage />
      </Suspense>
    ),
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
