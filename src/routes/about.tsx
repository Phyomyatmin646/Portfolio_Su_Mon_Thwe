

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

const skills = {
  
  "Data Analysis": ['SQL', 'Python (Pandas, NumPy)', 'Data Visualization', 'Statistical Analysis', 'ETL Processes'],
  "Tools": ['Tableau', 'Power BI', 'Excel (VBA)', 'Jupyter Notebooks', 'Git', 'Docker'],
  "Database": ['PostgreSQL', 'MySQL', 'MongoDB', 'BigQuery', 'Redis'],
  "Cloud & Deployment": ['AWS', 'Google Cloud Platform', 'Netlify', 'Vercel', 'CI/CD']
}

const timeline = [
  {
    year: '2024',
    title: 'Senior Data Analyst',
    org: 'Freelance',
    desc: 'Working with startups to derive actionable insights from complex datasets and building automated reporting dashboards.',
  },
  {
    year: '2022',
    title: 'Data Analyst',
    org: 'Initech',
    desc: 'Managed large-scale data migration and improved data accuracy by 40% through automated validation scripts.',
  },
  {
    year: '2020',
    title: 'Junior Data Analyst',
    org: 'Initech',
    desc: 'Assisted in building business intelligence reports and performing exploratory data analysis for key stakeholders.',
  },
  {
    year: '2019',
    title: 'Data Science Bootcamp Graduate',
    org: 'Code School',
    desc: 'Intensive program covering statistical modeling, machine learning fundamentals, and data storytelling.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">About Me</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              I turn data into{' '}
              <span className="gradient-text">insights.</span>
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Su Mon Thwe, a dedicated Data Analyst based in Myanmar.
                With over five years of experience, I specialize in transforming raw data into 
                clear, actionable strategies that drive business growth.
              </p>
              <p>
                My background combines technical proficiency in SQL and Python with a keen eye for 
                storytelling through visualization — ensuring that complex findings are 
                accessible to all stakeholders.
              </p>
              <p>
                When I'm not diving into datasets, you'll find me shooting film photography, 
                running trails in the Marin Headlands, or exploring new data visualization techniques.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />
            <img
              src="/.netlify/images?url=/headshot-on-white.jpg&w=600&h=700&fit=cover&q=85"
              alt="Su Mon Thwe"
              className="relative w-full max-w-sm mx-auto rounded-2xl object-cover  border border-border aspect-4/5"
              
            />
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold gradient-text">5+</div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Expertise</p>
          <h2 className="text-3xl font-bold mb-12">Skills & Tools</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Journey</p>
        <h2 className="text-3xl font-bold mb-12">Timeline</h2>

        <div className="relative">
          <div className="absolute left-13 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-10">
            {timeline.map((item) => (
              <div key={item.year + item.title} className="flex gap-8 items-start">
                <div className="shrink-0 w-24 text-right">
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                </div>
                <div className="relative">
                  <div className=" left-[-1.85rem] absolute  top-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background hidden md:block" />
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-primary/80 mb-2">{item.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-card/20">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Philosophy</p>
          <h2 className="text-3xl font-bold mb-12">How I Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Data Integrity First',
                desc: 'Accuracy is the foundation of every insight. I ensure clean, reliable data pipelines before drawing conclusions.',
              },
              {
                number: '02',
                title: 'Actionable Insights',
                desc: 'Data without action is just noise. I focus on finding patterns that lead to real-world business decisions.',
              },
              {
                number: '03',
                title: 'Visual Clarity',
                desc: 'Complexity should be simplified. I use intuitive visualizations to make data stories understandable for everyone.',
              },
            ].map((value) => (
              <div key={value.number} className="group">
                <div className="text-5xl font-bold text-border group-hover:text-primary/30 transition-colors mb-4">
                  {value.number}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}