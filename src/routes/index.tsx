import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, BarChart3, Database, Search } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.62 0.22 285) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.62 0.22 285) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/8 blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for new data projects
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
              Data &amp;{' '}
              <span className="gradient-text">Insights</span>
              <br />
              That Drive
              <br />
              Growth.
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl">
              I'm Su Mon Thwe — a Data Analyst dedicated to uncovering hidden patterns 
              and transforming complex datasets into clear, actionable business strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:gap-3"
              >
                View Case Studies
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills strip */}
      <section className="border-y border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database size={24} />,
                title: 'Data Management',
                desc: 'SQL, Python, and ETL pipelines — ensuring data integrity and accessibility across systems.',
              },
              {
                icon: <BarChart3 size={24} />,
                title: 'Visualization & BI',
                desc: 'Creating intuitive dashboards in Tableau and Power BI that simplify complex information.',
              },
              {
                icon: <Search size={24} />,
                title: 'Statistical Analysis',
                desc: 'Applying rigorous statistical methods to identify trends and forecast business outcomes.',
              },
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-relaxed leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects teaser */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Featured Work</p>
            <h2 className="text-4xl font-bold">Analysis Projects</h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Market Trend Analysis',
              tags: ['Python', 'Pandas', 'Matplotlib'],
              desc: 'Comprehensive study of consumer behavior patterns in the 2025 tech retail market.',
              color: 'from-violet-500/20 to-purple-500/5',
            },
            {
              title: 'Operations Dashboard',
              tags: ['SQL', 'Power BI', 'ETL'],
              desc: 'Real-time monitoring system for supply chain logistics, reducing reporting latency by 50%.',
              color: 'from-blue-500/20 to-cyan-500/5',
            },
          ].map((project) => (
            <div
              key={project.title}
              className={`relative rounded-xl border border-border overflow-hidden bg-gradient-to-br ${project.color} p-8 hover:border-primary/40 transition-all duration-300 group`}
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full border border-border bg-background/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Let's Work With Data</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need data-driven answers?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            From predictive modeling to automated reporting — let's turn your data into a competitive advantage.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}