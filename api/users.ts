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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getUsers() {
  await sleep(2000)
  return fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users`)
    .then((res) => res.json())
    .then((data) => data as User)
}
