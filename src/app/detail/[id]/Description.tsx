import Typography from "@mui/material/Typography";

export default function Description(props: {
  description: string;
  price: number;
  title: string;
}) {
  const { description, price, title } = props;
  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
      <Typography variant="overline">{price}</Typography>
    </>
  );
}
