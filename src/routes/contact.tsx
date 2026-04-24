import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, Github, Twitter, Linkedin, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const socials = [
  {
    name: 'GitHub',
    handle: '@alexrivera',
    href: 'https://github.com',
    icon: Github,
    desc: 'Open source & projects',
  },
  {
    name: 'Twitter / X',
    handle: '@alexrivera_dev',
    href: 'https://twitter.com',
    icon: Twitter,
    desc: 'Thoughts on dev & design',
  },
  {
    name: 'LinkedIn',
    handle: 'Alex Rivera',
    href: 'https://linkedin.com',
    icon: Linkedin,
    desc: 'Professional background',
  },
  {
    name: 'Email',
    handle: 'hello@alexrivera.dev',
    href: 'mailto:hello@alexrivera.dev',
    icon: Mail,
    desc: 'Best for project inquiries',
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Message received.</h2>
          <p className="text-muted-foreground mb-8">
            Thanks for reaching out. I typically respond within 1–2 business days.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Send Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
        <h1 className="text-5xl font-bold mb-4">Let's Talk</h1>
        <p className="text-muted-foreground mb-16 max-w-lg">
          Have a project in mind, want to collaborate, or just want to say hi?
          Drop me a message — I read everything.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                fetch('/contact.html', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(
                    formData as unknown as Record<string, string>,
                  ).toString(),
                }).then(() => setSubmitted(true))
              }}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
                >
                  <option value="project">New Project</option>
                  <option value="collab">Collaboration</option>
                  <option value="freelance">Freelance Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:gap-3"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          </div>

          {/* Social links */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Find Me Online
            </h2>
            {socials.map(({ name, handle, href, icon: Icon, desc }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{name}</div>
                  <div className="text-primary/80 text-sm">{handle}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{desc}</div>
                </div>
              </a>
            ))}

            <div className="pt-4 p-4 rounded-xl border border-border bg-card/30">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Response time:</span> I typically
                reply within 1–2 business days. For urgent matters, Twitter DMs are fastest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
