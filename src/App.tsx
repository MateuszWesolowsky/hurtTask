import { StyledEngineProvider } from "@mui/material";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./components/Layout";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <Navigation />
        <MainPage />
      </Layout>
    </StyledEngineProvider>
  );
}

export default App;
