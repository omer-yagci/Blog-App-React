import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AddUser } from "../auth/functions";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const initialValues = {
    title: "",
    image: "",
    content: "",
  };
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(values.title);
    // console.log(values.image);
    // console.log(values.content);
    // console.log("asdasdsad");
    AddUser(values);
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

    //   <div className="flex justify-center items-center mt-6 ">
    //     <div className="p-10 rounded-lg shadow-lg bg-yellow-50 max-w-md w-96 border-2 border-slate-200 ">
    //       <form onSubmit={handleSubmit}>
    //         <div className="form-group mb-6">
    //           <input
    //             type="text"
    //             className="form-control block
    //   w-full
    //   px-3
    //   py-1.5
    //   text-base
    //   font-normal
    //   text-gray-700
    //   bg-white bg-clip-padding
    //   border border-solid border-gray-300
    //   rounded
    //   transition
    //   ease-in-out
    //   m-0
    //   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //             id="exampleInput7"
    //             placeholder="Title"
    //           />
    //         </div>
    //         <div className="form-group mb-6">
    //           <input
    //             type="text"
    //             className="form-control block
    //   w-full
    //   px-3
    //   py-1.5
    //   text-base
    //   font-normal
    //   text-gray-700
    //   bg-white bg-clip-padding
    //   border border-solid border-gray-300
    //   rounded
    //   transition
    //   ease-in-out
    //   m-0
    //   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //             id="exampleInput8"
    //             placeholder="İmage URK"
    //           />
    //         </div>
    //         <div className="form-group mb-6">
    //           <textarea
    //             className="
    //   form-control
    //   block
    //   w-full
    //   px-3
    //   py-1.5
    //   text-base
    //   font-normal
    //   text-gray-700
    //   bg-white bg-clip-padding
    //   border border-solid border-gray-300
    //   rounded
    //   transition
    //   ease-in-out
    //   m-0
    //   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    // "
    //             id="exampleFormControlTextarea13"
    //             rows={3}
    //             placeholder="Message"
    //             defaultValue={""}
    //           />
    //         </div>

    //         <button
    //           type="submit"
    //           className="
    // w-full
    // px-6
    // py-2.5
    // bg-blue-600
    // text-white
    // font-medium
    // text-xs
    // leading-tight
    // uppercase
    // rounded
    // shadow-md
    // hover:bg-blue-700 hover:shadow-lg
    // focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    // active:bg-blue-800 active:shadow-lg
    // transition
    // duration-150
    // ease-in-out"
    //         >
    //           Submit
    //         </button>
    //       </form>
    //     </div>
    //   </div>
  );
};

export default NewBlog;
