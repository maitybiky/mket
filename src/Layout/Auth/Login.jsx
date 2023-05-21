import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Radio from "@mui/material/Radio";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { RadioGroup } from "@mui/material";
import { useAccType, useToken } from "../../zustand/store";
import supabase from "../../Supabase/Supabase";
import { Link } from "react-router-dom";
import Loading from "../../Component/Loading";
import { useState } from "react";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const { setSeller, setUser, loggedIn, setAccount } = useAccType();
  const { setAxsToken, setRefreashToken, setExpTime, token } = useToken();
  const [load, setLoad] = useState(false);
  const [loginData, setLoginData] = React.useState({
    accType: "user",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const input_data = new FormData(event.currentTarget);
    setLoad(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: input_data.get("email"),
      password: input_data.get("password"),
    });
    setLoad(false);
    if (data) {
      const { access_token, refresh_token, expires_at } = data.session;
      const { user } = data;

      loggedIn();
      setAccount(user);
      setAxsToken(access_token);
      setRefreashToken(refresh_token);
      setExpTime(expires_at);
      if (user.user_metadata.acountType === "seller") {
        setSeller();
      } else if (user.user_metadata.acountType === "user") {
        setUser();
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Loading loading={load} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => {
                  setLoginData((prev) => {
                    return { ...prev, accType: e.target.value };
                  });
                }}
                value={loginData.accType}
              >
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                />
                <FormControlLabel
                  value="seller"
                  control={<Radio />}
                  label="Shop Owner"
                />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
