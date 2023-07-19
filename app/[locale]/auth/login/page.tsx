"use client";

import TextField from "@mui/material/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";

interface LoginInput {
  email: string;
  password: string;
}

export default function Login() {
  const t = useTranslations("Auth");

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => console.log(data);

  return (
    <Grid container>
      <Grid md={4} />
      <Grid xs={12} md={4}>
        <form onSubmit={handleSubmit(onSubmit)} className="m-8">
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="standard"
                    label={t("email")}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="standard"
                    label={t("password")}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid xs={12}>
              <Button type="submit" fullWidth>
                {t("submit")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid md={4} />
    </Grid>
  );
}
