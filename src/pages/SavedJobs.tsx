import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Briefcase,
  Clock,
  Bookmark,
  Building2,
  Trash2,
} from "lucide-react";

// Mock saved jobs (in real app, this would come from user state/API)
const savedJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    posted: "2 days ago",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    savedAt: "Yesterday",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "New York, NY",
    type: "Contract",
    salary: "$80k - $100k",
    posted: "3 days ago",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    savedAt: "2 days ago",
  },
];

const SavedJobs = () => {
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
              <Button variant="ghost" className="text-primary">
                Saved
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost">Profile</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Bookmark className="h-8 w-8" /> Saved Jobs
          </h1>
          <p className="text-muted-foreground mt-2">
            {savedJobs.length} jobs saved
          </p>
        </div>

        {savedJobs.length > 0 ? (
          <div className="grid gap-4">
            {savedJobs.map((job) => (
              <Card key={job.id} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        <Link
                          to={`/jobs/${job.id}`}
                          className="hover:text-primary hover:underline"
                        >
                          {job.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Building2 className="h-4 w-4" />
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> Saved {job.savedAt}
                    </span>
                    <span className="font-semibold text-foreground">
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Link to={`/jobs/${job.id}`}>
                    <Button>View Details</Button>
                  </Link>
                  <Button variant="outline">Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">No saved jobs yet</h2>
              <p className="text-muted-foreground mb-4">
                Start browsing jobs and save the ones you're interested in.
              </p>
              <Link to="/jobs">
                <Button>Browse Jobs</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default SavedJobs;
