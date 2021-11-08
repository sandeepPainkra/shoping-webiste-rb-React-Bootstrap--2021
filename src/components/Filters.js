import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Ratings from "../Ratings";

const Filters = () => {
  const [Rate, setRet] = useState(5);
  return (
    <div className="filters ">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          type="radio"
          label="ascending "
          name="group1"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          type="radio"
          label="descending "
          name="group1"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          label="Include Out of Stock "
          name="group1"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          label="Fast Delivery only "
          name="group1"
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Ratings rating={Rate} style={{ cursor: "pointer" }} />
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filters;
