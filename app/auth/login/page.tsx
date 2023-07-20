"use client";

import TextField from "@mui/material/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Cookies from "universal-cookie";
import dayjs from "dayjs";

interface LoginInput {
  username: string;
  password: string;
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required().min(8),
  })
  .required();

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data);
    const { username, password } = data;
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password,
        expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        const cookies = new Cookies();
        cookies.set("eco-auth", json.token, {
          path: "/",
          domain: "localhost",
          expires: new Date(dayjs().add(3600, "s").format()),
        });
      });
  };

  return (
    <Grid container>
      <Grid md={4} />
      <Grid xs={12} md={4}>
        <form onSubmit={handleSubmit(onSubmit)} className="m-8">
          <Grid container spacing={2}>
            <Grid xs={12}>fake username atuny0</Grid>
            <Grid xs={12}>fake password 9uQFF1Lh</Grid>
            <Grid xs={12}>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={"username"}
                    fullWidth
                    error={Boolean(errors?.username)}
                    helperText={errors?.username && errors.username.message}
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
                    label={"password"}
                    fullWidth
                    error={Boolean(errors?.password)}
                    helperText={errors?.password && errors.password.message}
                    type="password"
                  />
                )}
              />
            </Grid>
            <Grid xs={12}>
              <Button type="submit" fullWidth>
                {"submit"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid md={4} />
    </Grid>
  );
}
