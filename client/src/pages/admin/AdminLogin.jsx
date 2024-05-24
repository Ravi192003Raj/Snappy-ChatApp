import React from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";


const isAdmin=false;

const AdminLogin = () => {
  const secretKey = useInputValidation("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Login attempted with secret key:", secretKey.value);
  };

  if(isAdmin) return <Navigate to="/admin/dashboard"/>;

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgb(40 120 222 / 50%), rgb(121 12 213 / 77%))",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          p: { xs: 2, sm: 3 },
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
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Admin Login
          </Typography>
          <form onSubmit={submitHandler} style={{ width: "100%" }}>
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
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
          </form>
        </Paper>
      </Container>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: "5%", md: "10%" },
          transform: "translateY(-50%)",
          textAlign: "right",
        }}
      >
      </Box>
    </div>
  );
};

export default AdminLogin;
