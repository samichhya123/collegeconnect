// CollegesContext.js
import React, { createContext, useState } from "react";

export const CollegesContext = createContext();

export const CollegesProvider = ({ children }) => {
  const [colleges, setColleges] = useState({
    Kathmandu: [
      { id: 1, name: "Orchid International College" },
      { id: 2, name: "The British College" },
    ],
    Lalitpur: [],
    Bhaktapur: [],
  });

  const addCollege = (valley, name) => {
    setColleges((prevColleges) => ({
      ...prevColleges,
      [valley]: [...prevColleges[valley], { id: Date.now(), name }],
    }));
  };

  const deleteCollege = (valley, id) => {
    setColleges((prevColleges) => ({
      ...prevColleges,
      [valley]: prevColleges[valley].filter((college) => college.id !== id),
    }));
  };

  return (
    <CollegesContext.Provider value={{ colleges, addCollege, deleteCollege }}>
      {children}
    </CollegesContext.Provider>
  );
};
