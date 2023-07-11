import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import HouseIcon from "@mui/icons-material/House";
import ToysIcon from "@mui/icons-material/Toys";
import PetsIcon from "@mui/icons-material/Pets";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Inspect from "./inspect";

async function getItems() {
  return [
    {
      id: 1,
      icon: <HouseIcon fontSize="large" />,
      text: "house",
    },
    {
      id: 2,
      icon: <ToysIcon fontSize="large" sx={{ color: "red" }} />,
      text: "toys",
    },
    {
      id: 3,
      icon: <PetsIcon fontSize="large" sx={{ color: "blue" }} />,
      text: "pets",
    },
  ];
}

export default async function Gallery() {
  const items = await getItems();

  return (
    <Grid container spacing={2}>
      {items.map((i) => (
        <Grid key={i.id}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {i.text}
              </Typography>
              {i.icon}
            </CardContent>
            <CardActions>
              <Inspect id={i.id} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
