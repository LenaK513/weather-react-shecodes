import React from "react";
import { Form } from "./Cities.styled";
import { Input } from "./Cities.styled";
import { InputBtn } from "./Cities.styled";
export default function Cities() {
  return (
    <Form id="search-form" className="nb-3">
      <Input
        type="search"
        placeholder="Type a city"
        className="form-control"
        id="city-input"
        // autocomplete="off"
      />

      <InputBtn type="submit" value="Search"></InputBtn>
    </Form>
  );
}
