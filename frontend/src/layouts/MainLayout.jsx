import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <main>
      <Sidebar />
      <Outlet />
    </main>
  );
}
export default MainLayout;
