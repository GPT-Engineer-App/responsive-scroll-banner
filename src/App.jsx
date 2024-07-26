import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {navItems.map((item) => (
              <Route key={item.to} path={item.to} element={item.page} />
            ))}
          </Routes>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;