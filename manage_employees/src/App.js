import EmployeeList from "./components/EmployeeList";
import EmployeeContextProvider from "./context/EmployeeContext";
import React from "react";

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
