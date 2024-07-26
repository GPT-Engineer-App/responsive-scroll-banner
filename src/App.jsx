import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;