import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "./DatePicker";

function CloseContact() {
  return (
    <div>
      <Form.Group>
        <Form.Label>Close Contact Type</Form.Label>
        <Form.Select>
          <option>Work</option>
          <option>Public</option>
          <option>Household</option>
        </Form.Select>
      </Form.Group>
      <br />
      <DatePicker />
      <br />
      <Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>End Isolation / Monitor Date</Form.Label>
          <Form.Control placeholder="" disabled />
        </Form.Group>
      </Form.Group>
    </div>
  );
}

export default CloseContact;
