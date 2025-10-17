import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import { AuthProvider, useAuth } from "./contextapi/AuthContext";

function AppContent() {
  const { isAdminLoggedIn } = useAuth();

  return (
    <BrowserRouter basename="/myportfolio">
      {isAdminLoggedIn ? <AdminNavBar /> : <MainNavBar />}
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
