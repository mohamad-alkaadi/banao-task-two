import { use } from "react"

type User = {
  createdAt: string
  avatar: string
  Bio: string
  jobTitle: string
  profile: {
    username: string
    firstName: string
    lastName: string
    email: string
  }
  id: string
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getUsers() {
  await sleep(2000)
  return fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users`)
    .then((res) => res.json())
    .then((data) => data as User)
}

export async function getUser(userId: string | number) {
  await sleep(2000)
  return fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${userId}`)
    .then((res) => res.json())
    .then((data) => data as User)
}
