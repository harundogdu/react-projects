import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {
  const { dispatch } = useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //addEmployee(name, email, address, phone);
    dispatch({type: 'add_employee', employee : {
      name, email, address, phone
  }})
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="my-2">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="enter employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="my-2">
        <Form.Label>Email email</Form.Label>
        <Form.Control
          type="email"
          placeholder="enter employee email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="my-2">
        <Form.Label>Employee address</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="enter employee address"
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="my-2">
        <Form.Label>Employee Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter employee phone number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mt-2">
        <Button variant="success" type="submit" className="w-100">
          Add New Employee
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AddForm;
