import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

import { useNavigate } from "react-router-dom";

const BlogCard = ({ element }) => {
  // const { displayName, email } = useSelector((state) => state.auth.user);

  const { image, content, title, userEmail, username, currentDate } = element;

  const navigate = useNavigate();

  const detailsHandler = () => {
    navigate("/details", { state: element });
  };
  return (
    <div>
      {
        <Card onClick={detailsHandler} sx={{ maxWidth: 345, margin: "1rem" }}>
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
          <CardMedia component="img" height="100" image={image} alt="image" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
          <CardContent>
            <FavoriteBorderIcon />
            <ModeCommentOutlinedIcon />
          </CardContent>
        </Card>
      }
    </div>
  );
};

export default BlogCard;
