import React, { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import EditForm from "./EditForm";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

const Employee = ({ employee }) => {
  const { dispatch } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [employeeID, setEmployeeID] = useState(null);

  const handleShowID = (id) => {
    setShow(true);
    setEmployeeID(id);
  };

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    // <> React.Fragment shortcut
    <React.Fragment>
        {
          <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
              <OverlayTrigger
                placement={`top`}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>Edit</strong>
                  </Tooltip>
                }
              >
                <button
                  onClick={() => handleShowID(employee.id)}
                  className="btn text-warning"
                  data-toggle="modal"
                >
                  <i className="material-icons">&#xE254;</i>
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                key={`top`}
                placement={`top`}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>Delete</strong>
                  </Tooltip>
                }
              >
                <button
                  onClick={() =>
                    dispatch({ type: "remove_employee", id: employee.id })
                  }
                  className="btn text-danger"
                >
                  <i className="material-icons">&#xE872;</i>
                </button>
              </OverlayTrigger>
            </td>
          </>
        }
        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title>Update Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditForm employeeID={employeeID} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Modal End */}
    </React.Fragment>
    // </> React.Fragment shortcut
  );
};
export default Employee;
