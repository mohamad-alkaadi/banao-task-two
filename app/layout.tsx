import type { Metadata } from "next"
import { Box, Grid } from "@mui/material"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import UsersList from "../components/UsersList"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "banao task 2",
  description: "banao second task",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Grid container columns={12}>
            <Grid
              item
              md={3}
              xs={5}
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
                  px: 2,
                  fontSize: "23px",
                  fontWeight: 500,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Users
                <Link
                  className="border-[1px] border-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:border-0 hover:to-pink-500 text-[13px] px-2 py-1"
                  href={`/11223344}`}
                >
                  Bad Request
                </Link>
              </Box>
              <UsersList />
            </Grid>
            <Grid
              item
              md={9}
              xs={7}
              sx={{ height: "100vh", bgcolor: "#2c2c2c" }}
            >
              {children}
            </Grid>
          </Grid>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
