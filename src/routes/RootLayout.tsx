import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import classes from "./RootLayout.module.css";
function RootLayout() {
  return (
    <>
      <Navbar />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
