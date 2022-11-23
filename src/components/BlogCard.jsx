import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LikeButton from "../components/LikeButton";
import CommentModal from "./CommentModal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UpdateComment, useFetch } from "../auth/functions";
import { randombgColor } from "../helpers/RandomBgColor";
import commentIcon from "../assests/comment.png";
import { toastErrorNotify } from "../helpers/ToastNotify";

const BlogCard = ({ element }) => {
  const [mouseOver, setMouseOver] = React.useState(false);

  const { contactList } = useFetch();
  const { email, displayName } = useSelector((state) => state.auth.user);

  // !COMMENT STATE
  const [commented, setCommented] = React.useState("");
  const [count, setCount] = React.useState();
  // !MODAL SHOW STATE
  const [show, setShow] = React.useState(false);

  // !COLOR STATE
  const [color, setColor] = React.useState(randombgColor());
  // ! Destruc.
  const { image, content, title, username, currentDate, id } = element;

  const navigate = useNavigate();

  // !HANDLER
  const detailsHandler = () => {
    if (!displayName) {
      toastErrorNotify("You must login to see details");
      navigate("/login");
    } else {
      navigate("/details", { state: element });
    }
  };

  const addComment = (id) => {
    if (count.length >= 20) {
      const commentArray = contactList?.find((produc) => produc.id === id);
      console.log(commentArray);
      const userComments = { email: email, commented: commented };
      commentArray?.comment.push(userComments);
      UpdateComment(commentArray);
    } else {
      toastErrorNotify("yorum yok");
    }
  };
  // !USEEFFECT
  React.useEffect(() => {
    setCount(commented.split(""));
  }, [commented]);

  const modalHandler = () => {
    if (!displayName) {
      toastErrorNotify("You must login to comment");
    } else {
      setShow(!show);
    }
  };
  return (
    <div>
      {
        <Card
          sx={{
            maxWidth: 300,
            margin: "1rem",
          }}
        >
          <CardHeader
            className="bg-white border-b-2"
            onMouseOver={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            title={mouseOver && username.toUpperCase()}
            avatar={
              <Avatar
                sx={{ bgcolor: color, border: "1px solid black " }}
                aria-label="recipe"
              >
                {username?.toUpperCase().charAt(0)}
              </Avatar>
            }
          />
          <CardMedia
            className="hover:cursor-pointer"
            sx={{
              maxHeight: 200,
              // maxWidth: 200,
              // borderRadius: "2rem",
              // padding: "1rem",
              margin: "0 auto",
            }}
            onClick={detailsHandler}
            component="img"
            height="100"
            image={image}
            alt="image"
          />
          <CardHeader title={title} subheader={currentDate} />

          <CardContent className="bg-slate-200 mt-[0.5rem]">
            <Typography
              className="text-ellipsis overflow-hidden whitespace-nowrap"
              variant="body2"
              color="text.primary"
            >
              {content}
            </Typography>
          </CardContent>
          <CardContent className=" flex justify-around items-center">
            <LikeButton />

            <img
              style={{ width: "6%" }}
              className="hover:cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target={`#${id}`}
              onClick={modalHandler}
              src={commentIcon}
              alt="icon"
            />
          </CardContent>
        </Card>
      }
      {show && displayName && (
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
