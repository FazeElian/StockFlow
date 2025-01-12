import { BrowserRouter, Route, Routes } from "react-router-dom";

// Headers
import { HeaderCompany } from "./components/company/HeaderCompany";

// Company Views
import HomeView from "./views/company/HomeView";

// Users
import RegisterView from "./views/company/auth/RegisterView";
import LoginView from "./views/company/auth/LoginView";
import ForgotPasswordView from "./views/company/auth/ForgotPasswordView";
import ConfirmAccountView from "./views/company/auth/ConfirmAccountView";

// Admin views
import DashboardView from "./views/admin/DashboardView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderCompany />}>
          <Route index element={<HomeView />} />
        </Route>

        {/* Users module */}
        <Route path="auth/*">
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="forgot-password" element={<ForgotPasswordView />} />
          <Route path="confirm-account" element={<ConfirmAccountView />} />
        </Route>

        <Route path="admin/*">
          <Route path="dashboard" element={<DashboardView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}