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

const Details = () => {
  const { state } = useLocation();

  const { email } = useSelector((state) => state.auth.user);
  const { image, content, title, userEmail, currentDate, id } = state;

  const initialValues = {
    title: "",
    imageURL: "",
    content: "",
  };

  const [update, setUpdate] = React.useState(initialValues);

  return (
    <>
      <div className="flex justify-center items-center">
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
            <Modal update={update} setUpdate={setUpdate} id={id} />
          )}
        </Card>
      </div>
    </>
  );
};

export default Details;
