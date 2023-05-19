import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";

export default function CardComp({head,body}) {
  const navi =useNavigate()

  return (
    <Card onClick={()=>navi("/shop/09")} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 140 }}
          image="https://content.jdmagicbox.com/comp/kolkata/d8/033pxx33.xx33.170911145230.h1d8/catalogue/lavanya-barasat-kolkata-gift-shops-92kvyo9rfy.jpg?clr="
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {head}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
