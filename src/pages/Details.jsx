import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import Comment from "../components/Comment";

const Details = () => {
  const [openComment, setOpenComment] = React.useState(false);

  const { state } = useLocation();
  const { email } = useSelector((state) => state.auth.user);
  const { image, content, title, userEmail, currentDate, id, comment } = state;

  const initialValues = {
    title: "",
    imageURL: "",
    content: "",
  };

  const [update, setUpdate] = React.useState(initialValues);
  const commentArray = comment?.map((element) => element);

  return (
    <>
      <div className="flex justify-center items-center flex-col bg-gradient-to-r from-blue-500 to-transparent h-[91vh]">
        <Card sx={{ maxWidth: 345, margin: "1rem" }}>
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title={title?.toUpperCase()}
            subheader={currentDate}
          />
          <CardMedia
            component="img"
            image={image}
            alt="image"
            className="p-2  rounded-md border-2"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>

          {email === userEmail && (
            <Modal update={update} setUpdate={setUpdate} id={id} />
          )}
        </Card>
        {/* <button
          className=" font-bold bg-slate-300 text-2xl text-center mt-2 w-[300px] border-2 block mx-auto shadow-md shadow-black rounded-lg active:scale-95 mb-6"
          onClick={() => setOpenComment(!openComment)}
        >
          {openComment
            ? `Close Comments (${comment?.length - 1})`
            : `Show Comments (${comment?.length - 1})`}
        </button>
        {openComment &&
          (commentArray ? (
            commentArray?.map((item, index) => (
              <Comment key={index} item={item} />
            ))
          ) : (
            <div className="ml">No Comment</div>
          ))} */}
      </div>
    </>
  );
};

export default Details;
