import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Box,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const bio = useInputValidation("");
  const password = useInputValidation("");
  const conpassword = useInputValidation("");
  const avatar = useFileHandler("single", 1);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgb(40 120 222 / 50%), rgb(121 12 213 / 77%))",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: "50%", md: "25%" },
          transform: { xs: "translate(-50%, -50%)", md: "translate(-50%, -50%)" },
          p: 1,
        }}
      >
        <Paper
          elevation={5}
          sx={{
            padding: { xs: 2, sm: 3 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem" } }}
              >
                Login
              </Typography>
              <form onSubmit={handleLogin} style={{ width: "100%" }}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Button variant="contained" color="primary" type="submit" fullWidth>
                    Login
                  </Button>
                </Box>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button variant="text" fullWidth onClick={toggleLogin}>
                  SIGNUP INSTEAD
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem" } }}
              >
                SIGN UP
              </Typography>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "7rem",
                    height: "7rem",
                    objectFit: "contain",
                    alignSelf: "center",
                  }}
                  src={avatar.preview}
                />
                <IconButton
                  sx={{
                    height: "2rem",
                    width: "2rem",
                    position: "absolute",
                    bottom: "0",
                    right: "2rem",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      color: "black",
                      bgcolor: "rgba(255,255,255,0.5)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon sx={{ height: "1rem", width: "1rem" }} />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>

              {avatar.error && (
                <Typography color="error" variant="caption">
                  {avatar.error}
                </Typography>
              )}
              <form onSubmit={handleSignUp} style={{ width: "100%" }}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={conpassword.value}
                  onChange={conpassword.changeHandler}
                />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Button variant="contained" color="primary" type="submit" fullWidth>
                    SIGN UP
                  </Button>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 2 }}
                  textAlign={"center"}
                >
                  OR
                </Typography>
                <Button
                  sx={{ marginTop: 1 }}
                  variant="text"
                  fullWidth
                  onClick={toggleLogin}
                >
                  LOGIN INSTEAD
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          textAlign: "right",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem", lg: "8rem" },
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Welcome
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
          }}
        >
          To
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" },
          }}
        >
          Snappy
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
