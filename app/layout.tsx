import type { Metadata } from "next"
import { Box, Grid } from "@mui/material"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import UsersList from "../components/UsersList"

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
