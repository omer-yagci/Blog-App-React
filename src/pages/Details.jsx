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
import { DeleteUser } from "../auth/functions";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { displayName, email } = useSelector((state) => state.auth.user);

  const { image, content, title, userEmail, username, currentDate } = state;

  const removeHandler = (id) => {
    console.log("asdas");
    DeleteUser(id);
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
            <Button onClick={() => removeHandler(state.id)} size="large">
              Remove
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default Details;
