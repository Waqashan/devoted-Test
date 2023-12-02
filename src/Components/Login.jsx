import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import React from "react";
import Layout from "../Layout/layout";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target, "eeeeeeeeeeeee");

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <Layout>
      <Box
        sx={{
          height: "83vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 6px",
        }}
      >
        {/* <Grid item xs={12} sm={4.5}> */}
        <Box
          sx={{
            maxWidth: "500px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            borderRadius: "16px",
            padding: "20px 30px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography textAlign={"center"} variant="h3">
                  Welcocme!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <label style={{ letterSpacing: "1px" }}>USERNAME</label>
                  <span
                    style={{
                      boxShadow:
                        "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                      borderRadius: "16px",
                      padding: "8px 8px",
                      width: "60%",
                    }}
                  >
                    <input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      value={data.username}
                      style={{ outline: "none", border: "none" }}
                    />
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <label style={{ letterSpacing: "1px" }}>PASSWORD </label>
                  <span
                    style={{
                      boxShadow:
                        "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                      borderRadius: "16px",
                      padding: "8px 8px",
                      width: "60%",
                    }}
                  >
                    <input
                      type="text"
                      onChange={handleChange}
                      name="password"
                      value={data.password}
                      style={{ outline: "none", border: "none" }}
                    />
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    className="btn"
                    sx={{
                      borderRadius: "16px",
                      padding: "5px 34px",
                      boxShadow:
                        " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                        color:"black"
                    }}
                  >
                    LogIn
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="p">NEW USER?</Typography>
                  <NavLink to="" style={{ textDecoration: "none",color:"black" }}>
                    CLICK HERE TO SIGNUP!
                  </NavLink>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <NavLink
                    to=""
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    SPR EMPLOYEE LOGIN
                  </NavLink>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
        {/* </Grid> */}
      </Box>
    </Layout>
  );
};

export default Login;
