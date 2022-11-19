import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ element }) => {
  const { displayName, email } = useSelector((state) => state.auth.user);

  const { image, content, title, userEmail, username } = element;

  const navigate = useNavigate();

  const detailsHandler = () => {
    navigate("/details", { state: element });
  };
  return (
    <div>
      {email === userEmail ? (
        <Card onClick={detailsHandler} sx={{ maxWidth: 345, margin: "1rem" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {
                  // email !== userEmail
                  // ? displayName?.toUpperCase().charAt(0)
                  //   : displayName?.toUpperCase().charAt(0)
                  // {displayName?.toUpperCase().charAt(0)}
                  username
                }
              </Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title={title}
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="100"
            image={image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ maxWidth: 345, margin: "1rem" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {
                  // email !== userEmail
                  // ? displayName?.toUpperCase().charAt(0)
                  //   : displayName?.toUpperCase().charAt(0)
                  // {displayName?.toUpperCase().charAt(0)}
                  displayName
                }
              </Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title={title}
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="100"
            image={image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BlogCard;
