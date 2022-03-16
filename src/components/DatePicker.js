import React from "react";
import { Form } from "react-bootstrap";

function DatePicker() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Form.Group controlId="doj">
            <Form.Label>Positive / Probable Test Date</Form.Label>
            <Form.Control type="date" name="doj" />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
