// React Router
import { Routes, Route } from "react-router-dom";
// Pages
import { AuthLayout, DashboardLayout, Home, SignIn, SignUp } from "./pages";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
      {/* Private Routes */}
      <Route element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
