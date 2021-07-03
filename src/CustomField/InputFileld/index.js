import React from "react";
import { ErrorMessage } from "formik";
import { FormFeedback, Input, FormGroup, Label } from "reactstrap";
import PropTypes from "prop-types";
import "./inputField.scss";

function InputField(props) {
  const { field, form, label, type, placeholder } = props;
  const { name } = field;
  const { errors, touched } = form;
  const isError = errors[name] && touched[name];

  return (
    <FormGroup className="input-field ">
      <Label className="input-field__label" for={name}>
        {label}
      </Label>
      <Input
        className={isError ? "is-invalid" : "input-field__input form-control"}
        id={name}
        {...field}
        type={type}
        invalid={isError}
        placeholder={placeholder}
      />

      <ErrorMessage
        style={{ fontSize: "1.2rem" }}
        name={name}
        component={FormFeedback}
      ></ErrorMessage>
    </FormGroup>
  );
}

InputField.propTypes = {};

export default InputField;
