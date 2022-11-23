import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import LikeButton from "../components/LikeButton";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CommentModal from "./CommentModal";
import { UpdateComment, useFetch } from "../auth/functions";

const BlogCard = ({ element }) => {
  const { contactList } = useFetch();
  const { email } = useSelector((state) => state.auth.user);

  const [commented, setCommented] = React.useState("");
  const [count, setCount] = React.useState();
  const [show, setShow] = React.useState(false);

  // ! Destruc.
  const { image, content, title, username, currentDate, id } = element;

  const navigate = useNavigate();

  const detailsHandler = () => {
    navigate("/details", { state: element });
  };
  console.log(id);
  console.log(commented);

  const addComment = (id) => {
    if (count.length >= 20) {
      const commentArray = contactList?.find((produc) => produc.id === id);
      console.log(commentArray);
      const userComments = { email: email, commented: commented };
      commentArray?.comment.push(userComments);
      UpdateComment(commentArray);
    } else {
      console.log("hata");
    }
  };
  React.useEffect(() => {
    setCount(commented.split(""));
  }, [commented]);

  return (
    <div>
      {
        <Card sx={{ maxWidth: 345, margin: "1rem" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {username?.toUpperCase().charAt(0)}
              </Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title={title}
            subheader={currentDate}
          />

          <CardMedia
            className="rounded-full w-[100rem] mx-auto"
            onClick={detailsHandler}
            component="img"
            // height="100"
            image={image}
            alt="image"
          />

          <CardContent>
            <Typography
              className="text-ellipsis overflow-hidden whitespace-nowrap"
              variant="body2"
              color="text.secondary"
            >
              {content}
            </Typography>
          </CardContent>
          <CardContent className=" flex justify-around items-center">
            <LikeButton />

            <ModeCommentOutlinedIcon
              className="hover:cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target={`#${id}`}
              onClick={() => setShow(!show)}
            />
          </CardContent>
        </Card>
      }
      {show && (
        <CommentModal
          id={id}
          setCommented={setCommented}
          commented={commented}
          addComment={addComment}
        />
      )}
    </div>
  );
};

export default BlogCard;
