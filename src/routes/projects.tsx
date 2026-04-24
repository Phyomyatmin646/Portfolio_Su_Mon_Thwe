import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

const accentColors = [
  'from-violet-500/20 to-purple-500/5 hover:border-violet-500/40',
  'from-blue-500/20 to-cyan-500/5 hover:border-blue-500/40',
  'from-emerald-500/20 to-teal-500/5 hover:border-emerald-500/40',
  'from-orange-500/20 to-amber-500/5 hover:border-orange-500/40',
]

function Projects() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Portfolio</p>
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className="text-muted-foreground mb-16 max-w-xl">
          A selection of work built with care — from side projects to production systems
          serving real users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((project, i) => (
            <article
              key={project._meta.path}
              className={`group relative rounded-xl border border-border overflow-hidden bg-gradient-to-br ${accentColors[i % accentColors.length]} p-8 flex flex-col transition-all duration-300`}
            >
              {/* Project image */}
              {project.image && (
                <div className="mb-6 -mx-8 -mt-8 overflow-hidden h-48">
                  <img
                    src={`/.netlify/images?url=${encodeURIComponent(project.image)}&w=800&h=400&fit=cover&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg border border-border bg-background/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg border border-border bg-background/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
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
            </article>
          ))}
        </div>

        {/* Open source note */}
        <div className="mt-16 p-8 rounded-xl border border-border bg-card/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-semibold text-foreground mb-1">Open to collaboration</h3>
            <p className="text-sm text-muted-foreground">
              Most of my personal projects are open-source. Find me on GitHub for more.
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all flex-shrink-0"
          >
            <Github size={16} />
            View on GitHub
            <ExternalLink size={12} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </div>
  )
}
