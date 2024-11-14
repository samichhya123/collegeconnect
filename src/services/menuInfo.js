import React from "react";

const DashboardPage = ({ title, message, userName }) => {
  return (
    <div className="page-content">
      <h2>{title}</h2>
      <p>{message}</p>
      <p>Logged in as: {userName}</p>
    </div>
  );
};

DashboardPage.defaultProps = {
  title: "Default Dashboard Title",
  message: "Default message for the dashboard.",
  userName: "Guest",
};

export default DashboardPage;
