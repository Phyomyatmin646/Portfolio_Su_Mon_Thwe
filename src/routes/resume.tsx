import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
// Content collections error တက်နေလျှင် data ကို ပုံသေ (Mock Data) အရင်ထည့်ပြီး စမ်းသပ်နိုင်ပါတယ်
import { allJobs, allEducations } from 'content-collections' 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

export const Route = createFileRoute('/resume')({
  component: App,
})

function App() {
  // Error ကင်းစေရန် Data ရှိမရှိ အရင်စစ်ဆေးခြင်း
  const hasJobs = allJobs && allJobs.length > 0;
  const hasEducation = allEducations && allEducations.length > 0;

  return (
    <div className="min-h-screen p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">My Resume</h1>
          <p className="text-lg text-muted-foreground">
            Professional Experience & Education
          </p>
          <Separator className="mt-8" />
        </div>

        {/* Career Summary - Su Mon Thwe (Data Analyst) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Career Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <p className="flex-1 leading-relaxed text-muted-foreground">
                I am Su Mon Thwe, a detail-oriented Data Analyst with a passion for 
                transforming complex datasets into actionable business insights. 
                With expertise in statistical analysis, data visualization, and 
                predictive modeling, I aim to help organizations unlock the full 
                potential of their data.
              </p>
              <img
                src="/headshot-on-white.jpg"
                alt="Su Mon Thwe - Data Analyst"
                className="w-44 h-52 rounded-2xl object-cover border border-border shadow-md"
              />
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Work Experience</h2>
          <div className="space-y-6">
            {hasJobs ? (
              allJobs.map((job) => (
                <Card key={job.jobTitle}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-xl">{job.jobTitle}</CardTitle>
                        <p className="font-medium text-primary">
                          {job.company} — {job.location}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-sm shrink-0">
                        {job.startDate} - {job.endDate || 'Present'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {job.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <HoverCard key={tag}>
                          <HoverCardTrigger>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">
                              {tag}
                            </Badge>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-64">
                            <p className="text-sm">
                              Applied {tag} to derive meaningful insights and optimize data workflows.
                            </p>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </div>
                    {job.content && (
                      <div
                        className="mt-6 prose prose-sm dark:prose-invert max-w-none border-t border-border pt-6"
                        dangerouslySetInnerHTML={{
                          __html: marked(job.content),
                        }}
                      />
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground italic">No experience data found in content-collections.</p>
            )}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Education</h2>
          <div className="space-y-6">
            {hasEducation ? (
              allEducations.map((education) => (
                <Card key={education.school}>
                  <CardHeader>
                    <CardTitle className="text-xl">{education.school}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-muted-foreground">
                      {education.summary}
                    </p>
                    {education.content && (
                      <div
                        className="mt-6 prose prose-sm dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: marked(education.content),
                        }}
                      />
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground italic">No education data found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}