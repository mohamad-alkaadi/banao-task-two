import { Box, Grid } from "@mui/material"
import React from "react"
import UsersList from "../../components/UsersList"

export default function Home() {
  return (
    <Grid container columns={12}>
      <Grid
        item
        xs={3}
        sx={{
          height: "100vh",
          bgcolor: "#2c2c2c",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            height: "40px",
            display: "flex",
            pl: 2,
            fontSize: "23px",
            fontWeight: 500,
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          Users
        </Box>
        <UsersList />
      </Grid>
      <Grid item xs={9} sx={{ height: "100vh", bgcolor: "#2c2c2c" }}></Grid>
    </Grid>
  )
}
