import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AddUser } from "../auth/functions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NewBlog = () => {
  // !Redux States
  const { displayName, email } = useSelector((state) => state.auth.user);

  // ! ONCHANGE HANDLER
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  // !INITIAL VALUES
  const initialValues = {
    title: "",
    image: "",
    content: "",
  };
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  // !SUMBIT HANDLER
  const handleSubmit = (event) => {
    event.preventDefault();

    const date = new Date();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const currentDate = date.toLocaleTimeString("tr-TR", options);

    AddUser(values, displayName, email, currentDate);
    setValues(initialValues);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center mt-6 ">
      <div className=" ml-5  p-5  bg-yellow-50 border-2 border-slate-400 rounded w-96">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="title here"
              onChange={changeHandler}
              value={values.title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              placeholder="image url here"
              onChange={changeHandler}
              value={values.image}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              name="content"
              rows={3}
              onChange={changeHandler}
              value={values.content}
            />
          </Form.Group>
          <Button className="bg-blue-500" type="submit">
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewBlog;
