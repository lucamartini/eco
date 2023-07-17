import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Details(props: {
  text: string;
  icon: React.ReactNode;
}) {
  const { text, icon } = props;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
        {icon}
      </CardContent>
    </Card>
  );
}
