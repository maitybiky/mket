import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
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
import supabase from "../../Supabase/Supabase";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAccType, useToken } from "../../zustand/store";
import Loading from "../../Component/Loading";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    accType: "user",
  });

  const { type, setSeller, setUser, loggedIn, setAccount } = useAccType(
    (state) => state
  );
  const { setAxsToken, setRefreashToken, setExpTime, token } = useToken(
    (state) => state
  );
  const navi = useNavigate();
  const defaultTheme = createTheme();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const input_data = new FormData(event.currentTarget);
    let account_data = {
      userName: input_data.get("userName"),
      acountType: loginData.accType,
    };
    if (loginData.accType === "seller") {
      account_data.shop_name = input_data.get("shop_name");
    }

    const { data, error } = await supabase.auth.signUp({
      email: input_data.get("email"),
      password: input_data.get("password"),
      options: {
        data: account_data,
      },
    });
    setLoading(false);

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
      <Loading loading={loading} />
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
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {loginData.accType === "seller" ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Shop Name"
                name="shop_name"
                autoFocus
              />
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User_Name"
              name="userName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
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
            />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                sign up as a
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
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/sign-in" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
