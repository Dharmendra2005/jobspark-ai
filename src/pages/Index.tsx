import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Briefcase,
  Search,
  Sparkles,
  Target,
  Zap,
  CheckCircle,
} from "lucide-react";

const Index = () => {
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="text-sm font-medium text-primary">
            AI-Powered Job Search
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Dream Job with
          <span className="text-primary"> AI</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let our intelligent matching algorithm connect you with the perfect
          opportunities. Smarter search, faster results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Job title, skills, or company..."
              className="pl-10 h-12"
            />
          </div>
          <Link to="/jobs">
            <Button size="lg" className="h-12 px-8">
              Search Jobs
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose JobSpark AI?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>AI-Powered Matching</CardTitle>
              <CardDescription>
                Our intelligent algorithm analyzes your skills and preferences
                to find the best job matches.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>
                Get tailored job suggestions based on your experience, skills,
                and career goals.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Fast Application Process</CardTitle>
              <CardDescription>
                Apply to multiple jobs with one click using your saved profile
                and resume.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">10K+</p>
              <p className="text-muted-foreground">Active Jobs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">5K+</p>
              <p className="text-muted-foreground">Companies</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">50K+</p>
              <p className="text-muted-foreground">Job Seekers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">95%</p>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">
              Ready to Find Your Dream Job?
            </CardTitle>
            <CardDescription>
              Join thousands of job seekers who have found their perfect role
              with JobSpark AI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button size="lg">Browse Jobs</Button>
              </Link>
              <Link to="/profile">
                <Button size="lg" variant="outline">
                  Create Profile
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 JobSpark AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
