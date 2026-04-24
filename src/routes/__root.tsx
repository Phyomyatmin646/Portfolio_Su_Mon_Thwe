import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Su Mon Thwe — Data Analyst Portfolio' },
      { 
        name: 'description', 
        content: 'Data Analyst dedicated to uncovering hidden patterns and transforming complex datasets into actionable insights.' 
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    /* Light Mode အတွက် 'dark' class ကို html tag မှ ဖယ်ရှားထားပါသည်။
      Website တစ်ခုလုံးကို light mode variables များ အသုံးပြုစေရန် 
      antialiased နှင့် bg-background တို့ကို body တွင် ထည့်သွင်းထားသည်။
    */
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/10">
        <Nav />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Scripts />
      </body>
    </html>
  )
}