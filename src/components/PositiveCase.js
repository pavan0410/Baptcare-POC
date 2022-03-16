import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "./DatePicker";

function PositiveCase() {
  return (
    <div>
      <Form.Group>
        <Form.Label>Positive Test Type</Form.Label>
        <Form.Select>
          <option>RAT</option>
          <option>PCR</option>
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

export default PositiveCase;
