import React, { useEffect, useState } from "react";
// import axios from 'axios';

export function InfiniteScroll() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("https://616e488fa83a850017caa8e1.mockapi.io/employee")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  return (
    <div className="scroll">
      <span style={{fontSize:'30px',color:"white"}}>Employee List</span>
      {employees.map((val, index) => {
        return (
          <div key={index} className="empContainer">
            <div className="emp-img"><img src={val.avatar} alt='img'/></div>
            <div className="empDetail">
            <span>Name   :{val.name}</span>
            <span>Email  :{val.email}</span>
            <span>Phone  :{val.phone}</span>
            <span>Job    :{val.job}</span>
            <span>Salary :  ${val.salary}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
