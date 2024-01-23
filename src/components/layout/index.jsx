import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
