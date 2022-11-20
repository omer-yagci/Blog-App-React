import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DeleteUser, useFetch } from "../auth/functions";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { contactList } = useFetch();

  const { email } = useSelector((state) => state.auth.user);
  const { image, content, title, userEmail, currentDate } = state;
  const initialValues = {
    title: "",
    imageURL: "",
    content: "",
  };

  const [update, setUpdate] = React.useState(initialValues);

  const removeHandler = (id) => {
    console.log("asdas");
    DeleteUser(id);
    navigate("/");
  };
  const updateHandler = (id) => {
    const items = contactList.find((item) => item.id === id);
    items.title = update.title;
    items.imageURL = update.imageURL;
    items.content = update.content;
    updateHandler(items);
    navigate("/");
  };

  return (
    <div className="flex justify-center  items-center">
      <Card sx={{ maxWidth: 345, margin: "1rem" }}>
        <CardHeader
          action={<IconButton aria-label="settings"></IconButton>}
          title={title?.toUpperCase()}
          subheader={currentDate}
        />
        <CardMedia component="img" height="100" image={image} alt="image" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        {email === userEmail && (
          <CardActions className="text-center">
            <Button size="large">Edit</Button>
            <>
              {/* Button trigger modal */}
              <button
                type="button"
                className="px-6
py-2.5
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Launch demo modal
              </button>
              {/* Modal */}
              <div
                className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog relative w-auto pointer-events-none">
                  <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h5
                        className="text-xl font-medium leading-normal text-gray-800"
                        id="exampleModalLabel"
                      >
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body relative p-4">
                      Modal body text goes here.
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                      <button
                        type="button"
                        className="px-6
    py-2.5
    bg-purple-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-purple-700 hover:shadow-lg
    focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-purple-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="px-6
py-2.5
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out
ml-1"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>

            <Button onClick={() => removeHandler(state.id)} size="large">
              Remove
            </Button>
          </CardActions>
        )}
      </Card>
      / {/* <div className="flex flex-col justify-center items-center mt-20 gap-4">
//                       {/* <img src={img} alt="img" /> */}
//                       <input
//                         className="w-[25rem] border-4 outline-none py-2 indent-2 shadow-md shadow-black rounded-md"
//                         value={update.title}
//                         type="text"
//                         placeholder="title"
//                         onChange={(event) =>
//                           setUpdate({ ...update, title: event.target.value })
//                         }
//                       />
//                       <input
//                         className="w-[25rem] border-4 outline-none py-2 indent-2 shadow-md shadow-black rounded-md"
//                         value={update.imageURL}
//                         type="text"
//                         placeholder="imageURL"
//                         onChange={(event) =>
//                           setUpdate({ ...update, imageURL: event.target.value })
//                         }
//                       />
//                       <input
//                         className="w-[25rem] border-4 outline-none py-2 indent-2 shadow-md shadow-black rounded-md"
//                         value={update.content}
//                         type="text"
//                         placeholder="content"
//                         onChange={(event) =>
//                           setUpdate({ ...update, content: event.target.value })
//                         } */}
// />
    </div>
  );
};

export default Details;
/
