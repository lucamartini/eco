import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import HouseIcon from "@mui/icons-material/House";
import ToysIcon from "@mui/icons-material/Toys";
import PetsIcon from "@mui/icons-material/Pets";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import CardActionArea from "@mui/material/CardActionArea";

async function getItems() {
  return [
    {
      id: "1",
      icon: <HouseIcon fontSize="large" />,
      text: "a house",
    },
    {
      id: "2",
      icon: <ToysIcon fontSize="large" sx={{ color: "red" }} />,
      text: "a toy",
    },
    {
      id: "3",
      icon: <PetsIcon fontSize="large" sx={{ color: "blue" }} />,
      text: "a pet",
    },
  ];
}

export default async function Gallery() {
  const items = await getItems();

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid key={item.id}>
          <Card sx={{ minWidth: 275 }}>
            <CardActionArea>
              <Link href={"/detail/" + item.id}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.text}
                  </Typography>
                  {item.icon}
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
