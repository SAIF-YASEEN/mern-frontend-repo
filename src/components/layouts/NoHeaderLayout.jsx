import React from "react";
import { Outlet } from "react-router-dom";

const NoHeaderLayout = () => {
  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <Outlet />
    </main>
  );
};

export default NoHeaderLayout;
