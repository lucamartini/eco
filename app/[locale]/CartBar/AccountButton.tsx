import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AccountButton() {
  const t = useTranslations("CartBar");
  return (
    <Button color="inherit">
      <Link href={"/auth/login"}>{t("login")}</Link>
    </Button>
  );
}
