"use client"
import React from "react"
import { Box } from "@mui/material"

const error = () => {
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
      No data to show
    </Box>
  )
}

export default error
