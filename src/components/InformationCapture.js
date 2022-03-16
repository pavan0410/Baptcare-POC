import React, { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PositiveCase from "./PositiveCase";
import CloseContact from "./CloseContact";

function InformationCapture() {
  const [selectedValue, changeSelectedValue] = useState(
    "Positive / probable case"
  );
  const handleChange = (e) => {
    changeSelectedValue(e.target.value);
  };
  return (
    <div>
      <Form.Group className="mt-5 w-50 mx-auto">
        <Form.Label>I want to report a:</Form.Label>
        <Form.Select value={selectedValue} onChange={handleChange}>
          <option value="Positive / probable case">
            Positive / probable case
          </option>
          <option value="Close contact">Close contact</option>
        </Form.Select>
        <br />
        {selectedValue === "Positive / probable case" ? (
          <PositiveCase />
        ) : (
          <CloseContact />
        )}
        <br />
        <div className="d-grid gap-2">
          <Button variant="outline-primary" size="lg">
            Next
          </Button>
        </div>
      </Form.Group>
      <br />
    </div>
  );
}

export default InformationCapture;
