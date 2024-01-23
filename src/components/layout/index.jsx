import { Outlet } from "react-router-dom";
import { Header } from "@components";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
