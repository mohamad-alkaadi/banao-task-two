import React from "react"
import { getUser } from "../../../api/users"
import { Box } from "@mui/material"
import unknown from "@/public/assets/unknown.png"
import Image from "next/image"
export default async function UserPage({
  params: { userId },
}: {
  params: { userId: string }
}) {
  const user = await getUser(userId)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        px: 3,
      }}
    >
      <Image
        className="bg-[#636363] rounded-full mb-3"
        src={unknown}
        alt="unknown"
        width={120}
        height={120}
      />
      <div>
        <p className="text-white text-[20px] font-[500] mb-3">
          {user.profile.firstName} {user.profile.lastName}
        </p>
      </div>
      <div>
        <p className="text-[#b9b9b9] text-[15px]">username:</p>
        <p className="text-white text-[16px] font-[500] mb-3">
          {user.profile.username}
        </p>
      </div>
      <div>
        <p className="text-[#b9b9b9] text-[15px]">Email: </p>
        <p className="text-white text-[16px] font-[500] mb-3">
          {user.profile.email}
        </p>
      </div>
      <div>
        <p className="text-[#b9b9b9] text-[15px]">Job:</p>{" "}
        <p className="text-white text-[16px] font-[500] mb-3">
          {user.jobTitle}
        </p>
      </div>
      <div>
        <p className="text-[#b9b9b9] text-[15px]">Bio:</p>
        <p className="text-white text-[16px] font-[500] mb-3">{user.Bio}</p>
      </div>
    </Box>
  )
}
