import Button from "@mui/material/Button";
import Link from "next/link";

export default function AccountButton() {
  return (
    <Button color="inherit">
      <Link href={"/auth/login"}>{"login"}</Link>
    </Button>
  );
}
