"use client";

import TextField from "@mui/material/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSetRecoilState } from "recoil";
import { authenticationState } from "../../providers/authenticationAtom";
import { useRouter } from "next/navigation";

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
  const setAuthenticationState = useSetRecoilState(authenticationState);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
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
        setAuthenticationState({
          token: json.token,
          id: json.id,
        });
        router.push("/");
      });
  };

  return (
    <Grid container>
      <Grid md={4} />
      <Grid xs={12} md={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Button
                onClick={() => {
                  setValue("username", "atuny0");
                }}
              >
                test username: atuny0
              </Button>
            </Grid>
            <Grid xs={12}>
              <Button
                onClick={() => {
                  setValue("password", "9uQFF1Lh");
                }}
              >
                test password: 9uQFF1Lh
              </Button>
            </Grid>
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
                {"login"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid md={4} />
    </Grid>
  );
}
