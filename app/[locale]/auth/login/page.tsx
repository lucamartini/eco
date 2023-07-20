"use client";

import TextField from "@mui/material/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface LoginInput {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required().min(8),
  })
  .required();

export default function Login() {
  const t = useTranslations("Auth");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
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
                    label={t("email")}
                    fullWidth
                    error={Boolean(errors?.email)}
                    helperText={errors?.email && t(errors.email.type)}
                    type="email"
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
                    label={t("password")}
                    fullWidth
                    error={Boolean(errors?.password)}
                    helperText={errors?.password && t(errors.password.type)}
                    type="password"
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
