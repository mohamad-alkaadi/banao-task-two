import React from "react"
import { Box } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"

const loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "30px",
        flexDirection: "column",
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default loader
