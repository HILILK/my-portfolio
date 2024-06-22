import { ThemeProvider } from "@/components/ui/theme-provider"

export const metadata = {
  title: 'Hirusha Liyanage',
  description: 'Developed By Hirusha Liyanage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  )
}
