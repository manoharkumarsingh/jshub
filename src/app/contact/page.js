import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <div className="card-contact">
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 350 }}
          image="/mypic.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Manohar Kumar Singh
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className="contact-me">
              <p>Mono : 9606514210</p>
              <p>Email : mksnitc@gmail.com</p>
              <p>Address : Bangalore Karnatka</p>
              <p>Pin : 560037</p>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
