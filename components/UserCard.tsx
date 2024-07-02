"use client"
import React from "react"
import { Box } from "@mui/material"
import Image from "next/image"
import unknown from "../public/assets/unknown.png"

const UserCard = ({ user }: { user: React.ReactDOM }) => {
  return (
    <Box
      sx={{
        display: "flex",
        my: "5px",
        p: 2,
        "&:hover": {
          bgcolor: "#383838",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={unknown}
          alt={user.profile.firstName}
          width={60}
          height={60}
          className="bg-[#454545] rounded-full"
        />
      </Box>
      <Box
        sx={{
          pl: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <h2 className="text-[16px] font-[600]">{`${user.profile.firstName} ${user.profile.lastName}`}</h2>
        <p className="text-[12px]">{user.jobTitle}</p>
      </Box>
    </Box>
  )
}

export default UserCard
