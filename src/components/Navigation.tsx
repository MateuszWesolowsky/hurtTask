import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useRef } from "react";

export const Navigation = () => {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topRef.current) {
      const rect = topRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      const offset = 100;
      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div ref={topRef}></div>
      <AppBar
        position="fixed"
        className="bg-gradient-to-r from-indigo-600 to-blue-500"
      >
        <Toolbar>
          <div
            className="cursor-pointer flex justify-center items-center"
            onClick={scrollToTop}
          >
            <Box
              component="img"
              src="../logo.png"
              alt="Logo"
              sx={{ width: 40, height: 40, mr: 2 }}
            />
            <Typography variant="h6" component="div">
              Movie App
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
