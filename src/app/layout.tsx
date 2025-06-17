import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'EscreveAI',
  description: 'Sua plataforma de auxílio à redação',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
