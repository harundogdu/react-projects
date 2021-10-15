import React from "react";
import Employee from "./Employee";
import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Button, Modal, Alert } from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const { sortedEmployees } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();
    return () => {
      handleAlert();
    };
  }, [sortedEmployees]);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indesOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indesOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPages = Math.ceil(sortedEmployees.length / employeesPerPage);
  const totalEmployee = employeesPerPage * totalPages;

  return (
    // <> => <React.Fragment> shortcut
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
              <Button
                onClick={handleShow}
                className="btn btn-success text-white"
                data-toggle="modal"
              >
                <i className="material-icons">&#xE147;</i>{" "}
                <span>Add New Employee</span>
              </Button>
          </div>
        </div>
      </div>
      <Alert variant="success" show={showAlert}>
        EmployeList successfully updated!
      </Alert>
      <table className="table table-striped table-hover w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalEmployee={totalEmployee}
        currentEmployees={currentEmployees}
      />
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal End */}
    </>
  );
};

export default EmployeeList;
