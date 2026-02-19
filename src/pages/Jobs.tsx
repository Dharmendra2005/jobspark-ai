import { useState } from "react";
import { Input } from "@/components/ui/input";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  Bookmark,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock job data
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
      "We're looking for a talented frontend developer to join our team...",
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
    description: "Join our fast-growing startup as a full stack engineer...",
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
    description: "Create beautiful and intuitive user interfaces...",
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "DataFlow Systems",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $140k",
    posted: "5 days ago",
    tags: ["Python", "Django", "AWS"],
    description: "Build scalable backend systems for our data platform...",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudNative Co.",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $160k",
    posted: "1 week ago",
    tags: ["Kubernetes", "Docker", "CI/CD"],
    description: "Manage and optimize our cloud infrastructure...",
  },
];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesLocation =
      !locationFilter ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType =
      !typeFilter || typeFilter === "all" || job.type === typeFilter;
    return matchesSearch && matchesLocation && matchesType;
  });

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId],
    );
  };

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
        {/* Search Section */}
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold">Find Your Dream Job</h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="relative flex-1 md:max-w-[200px]">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredJobs.length} jobs
        </div>

        {/* Job Cards */}
        <div className="grid gap-4">
          {filteredJobs.map((job) => (
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
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleSaveJob(job.id)}
                    className={savedJobs.includes(job.id) ? "text-primary" : ""}
                  >
                    <Bookmark
                      className={`h-5 w-5 ${savedJobs.includes(job.id) ? "fill-current" : ""}`}
                    />
                  </Button>
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
                    <Clock className="h-4 w-4" /> {job.posted}
                  </span>
                  <span className="font-semibold text-foreground">
                    {job.salary}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/jobs/${job.id}`}>
                  <Button>View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No jobs found matching your criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Jobs;
