import React from "react";

const DashboardPage = ({ title, message, userName }) => {
  return (
    <div className="page-content">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

DashboardPage.defaultProps = {
  title: "Default Dashboard Title",
  message: "Default message for the dashboard.",
};

export default DashboardPage;
