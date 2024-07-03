"use client"
import React from "react"
import { Box } from "@mui/material"
import Image from "next/image"
import unknown from "../public/assets/unknown.png"
import Link from "next/link"
import { usePathname } from "next/navigation"

const UserCard = ({ user }: { user: any }) => {
  const pathname = usePathname()
  const newPath = pathname.replace("/", "")
  console.log(newPath)
  return (
    <Link
      className={`flex my-[5px] p-2  ${
        newPath === user.id
          ? "bg-[#454545] hover:bg-[#515151]"
          : "hover:bg-[#383838]"
      }`}
      href={`/${user.id}`}
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
          className="bg-[#636363] rounded-full"
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
    </Link>
  )
}

export default UserCard
