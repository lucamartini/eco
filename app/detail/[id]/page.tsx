import Details from "./Details";
import HouseIcon from "@mui/icons-material/House";
import ToysIcon from "@mui/icons-material/Toys";
import PetsIcon from "@mui/icons-material/Pets";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { notFound } from "next/navigation";
import Description from "./Description";
import Buy from "./Buy";

async function getDetails(id: string) {
  switch (id) {
    case "1":
      return {
        id: "1",
        icon: <HouseIcon fontSize="large" />,
        text: "the house",
        description: "lorem ipsum",
        price: 100,
      };
    case "2":
      return {
        id: "2",
        icon: <ToysIcon fontSize="large" sx={{ color: "red" }} />,
        text: "the toy",
        description: "lorem ipsum",
        price: 1000,
      };
    case "3":
      return {
        id: "3",
        icon: <PetsIcon fontSize="large" sx={{ color: "blue" }} />,
        text: "the pet",
        description: "lorem ipsum",
        price: 5.15,
      };
    default:
      return null;
  }
}

export default async function Detail(props: { params: { id: string } }) {
  const { id } = props.params;
  const details = await getDetails(id);
  if (!details) {
    notFound();
  }

  return (
    <Grid container spacing={2}>
      <Grid xs={5}>
        <Details text={details.text} icon={details.icon} />
      </Grid>
      <Grid xs={5}>
        <Description
          description={details.description}
          price={details.price}
          title={details.text}
        />
      </Grid>
      <Grid xs={2}>
        <Buy id={details.id} />
      </Grid>
    </Grid>
  );
}
