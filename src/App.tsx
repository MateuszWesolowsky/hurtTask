import { Button, StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Button variant="contained" className=" bg-slate-900">
          Hello world
        </Button>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
