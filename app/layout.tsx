import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Student Loan Repayment Optimizer',
  description: 'Optimize your student loan repayment strategy. Compare forgiveness programs, calculate savings, and find the fastest path to debt freedom.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d645202b-d730-4d7c-90e7-4b55aecd726e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
