import { ApolloProvider } from "@/lib/providers/apollo-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import styles from "./layout.module.scss"

import "@/lib/ui/theme.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A pokedex for all your pokemon needs",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ApolloProvider>
      <div className={styles.layoutContainer}>
        {children}
      </div>
    </ApolloProvider>
    </body>
    </html>
  )
}
