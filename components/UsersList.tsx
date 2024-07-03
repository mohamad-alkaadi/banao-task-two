import React from "react"
import { Box, Grid } from "@mui/material"
import { getUsers } from "../api/users"
import Image from "next/image"
import UserCard from "./UserCard"

export default async function UsersList() {
  const users = await getUsers()
  return (
    <Box
      sx={{
        height: "calc(100vh - 40px)",
        overflow: "auto",
      }}
    >
      {users.map((user: any) => (
        <UserCard user={user} key={user.id} />
      ))}
    </Box>
  )
}
