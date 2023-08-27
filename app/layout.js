import './globals.css'


import { Providers } from "@/redux/provider"

export const metadata = {
  title: 'Connect 4',
  description: 'Play connect 4 with your friends!!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body >
          <Providers>
            {children}
          </Providers>          
        </body>
    </html>
  )
}
