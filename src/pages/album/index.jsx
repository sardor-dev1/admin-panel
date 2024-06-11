import React, { useEffect, useState } from "react";
import axios from "axios";

// MUI cards
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// MUI button
import DeleteIcon from "@mui/icons-material/Delete";


import "./index.scss";

const index = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setPhotos(res.data.slice(0, 20));
    });
  }, []);

  const handleDeletePhoto = (photoId) => {
    setPhotos(photos.filter((photo) => photo.id !== photoId));
  };

  return (
    <>
      <div className="photos">
        <h2 className="text-center py-3">Album</h2>
        <div className="photos__body">
          {photos.map((item, index) => (
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className="card__footer">
                <CardActions>
                  <Button
                    variant="outlined"
                    onClick={() => handleDeletePhoto(item.id)}
                    size="small"
                    color="primary"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </CardActions>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
