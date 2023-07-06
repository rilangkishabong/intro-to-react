import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Please enter a to-do!")
    .min(3, "Mininum 3 characters required")
    .max(7, "Maximum 7 characters required"),
});

export const TodoForm = ({ setList, list }) => {
  const [todo, setTodo] = useState({ title: "" });

  console.log("list:", list);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    setList([...list, values]);
    setTodo({ ...todo, title: "" });
    resetForm();
  };

  return (
    <Formik
      initialValues={todo}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="todo">Title:</label>
        <div style={{ width: 500, margin: "auto" }}>
          <Field type="text" id="todo" name="title" className="form-control" />
        </div>
        <ErrorMessage name="title" component="div" className="error" />
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </Form>
    </Formik>
  );
};
