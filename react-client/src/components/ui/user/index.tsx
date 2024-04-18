import { useState } from "react";
import UserJson from "./index.json";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { ImageComponent } from "../imageComponent";

export type SingleUser = (typeof UserJson)[0];

export function UserCard(props: { user: SingleUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user?.name?.first}
          {user?.name?.last}
        </Typography>
        <ImageComponent image={user?.picture?.large} />

        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.phone}
        </Typography>
        <Typography variant="body2">{user.dob.age}</Typography>
      </CardContent>
      <CardActions>
        <div
          style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
        >
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            size="small"
          >
            Learn More
          </Button>
        </div>
        {isOpen && (
          <div style={{ maxWidth: "100px" }}>
            Hello here is more information related to my business.{" "}
          </div>
        )}
      </CardActions>
    </Card>
  );
}
