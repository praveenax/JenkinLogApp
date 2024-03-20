import React from "react";
import Navigationbar from "../../Layout/Navbar";
import Table from "../../Components/Table/Table";
import LineGraph from "../../Components/Graph/Graph";

const Dashboard = () => {
  return (
    <>
      <Navigationbar />
      <LineGraph />
      <Table />
    </>
  );
};

export default Dashboard;
