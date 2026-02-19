import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  Building2,
  DollarSign,
  Bookmark,
  Share2,
  ExternalLink,
} from "lucide-react";

// Mock job data (same as Jobs page - in real app, this would come from API)
const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    posted: "2 days ago",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "We're looking for a talented frontend developer to join our team and help build the next generation of web applications.",
    fullDescription: `
      About the Role:
      We are seeking an experienced Senior Frontend Developer to join our growing engineering team. You will be responsible for building and maintaining high-quality web applications using modern technologies.

      Responsibilities:
      • Design and implement user-facing features using React and TypeScript
      • Collaborate with designers to translate UI/UX wireframes into functional code
      • Optimize applications for maximum speed and scalability
      • Participate in code reviews and mentor junior developers
      • Stay up-to-date with emerging technologies and best practices

      Requirements:
      • 5+ years of experience in frontend development
      • Strong proficiency in React, TypeScript, and modern CSS
      • Experience with state management solutions (Redux, Zustand, etc.)
      • Familiarity with testing frameworks (Jest, Cypress)
      • Excellent problem-solving and communication skills

      Benefits:
      • Competitive salary and equity package
      • Health, dental, and vision insurance
      • 401(k) with company match
      • Flexible work arrangements
      • Professional development budget
    `,
    companyInfo:
      "TechCorp Inc. is a leading technology company specializing in enterprise software solutions. Founded in 2010, we have grown to over 500 employees across 3 continents.",
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $130k",
    posted: "1 day ago",
    tags: ["Node.js", "React", "PostgreSQL"],
    description:
      "Join our fast-growing startup as a full stack engineer and help shape the future of our product.",
    fullDescription: `
      About the Role:
      We're looking for a Full Stack Engineer to join our dynamic team. You'll work on both frontend and backend systems to deliver features that delight our users.

      Responsibilities:
      • Build and maintain scalable web applications
      • Design and implement RESTful APIs
      • Work closely with product and design teams
      • Contribute to architecture decisions
      • Write clean, maintainable code

      Requirements:
      • 3+ years of full stack development experience
      • Proficiency in Node.js and React
      • Experience with SQL databases
      • Understanding of cloud services (AWS/GCP)
      • Strong communication skills

      Benefits:
      • Fully remote position
      • Competitive salary
      • Stock options
      • Unlimited PTO
      • Home office stipend
    `,
    companyInfo:
      "StartupXYZ is a venture-backed startup revolutionizing the way people work. We're a team of 30 passionate individuals on a mission to make work more productive.",
  },
];

const JobDetails = () => {
  const { id } = useParams();
  const job = mockJobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <Link to="/jobs">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">JobSpark AI</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/jobs">
              <Button variant="ghost">Jobs</Button>
            </Link>
            <Link to="/saved">
              <Button variant="ghost">Saved</Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost">Profile</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/jobs"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> Posted {job.posted}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" /> {job.salary}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button size="lg" className="w-full md:w-auto">
                  Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <p className="whitespace-pre-line">{job.fullDescription}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {job.companyInfo}
                </p>
                <Separator className="my-4" />
                <Button variant="outline" className="w-full">
                  View Company Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockJobs
                  .filter((j) => j.id !== job.id)
                  .slice(0, 3)
                  .map((similarJob) => (
                    <Link
                      key={similarJob.id}
                      to={`/jobs/${similarJob.id}`}
                      className="block p-3 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <p className="font-medium text-sm">{similarJob.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {similarJob.company}
                      </p>
                    </Link>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetails;
