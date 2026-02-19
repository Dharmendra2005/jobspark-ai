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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  User,
  Mail,
  MapPin,
  Phone,
  FileText,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

const Profile = () => {
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
              <Button variant="ghost" className="text-primary">
                Profile
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <User className="h-8 w-8" /> My Profile
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>Full Stack Developer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                john.doe@email.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </div>
              <Separator />
              <div>
                <p className="text-sm font-medium mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
              </div>
              <Separator />
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </CardContent>
          </Card>

          {/* Tabs Section */}
          <Card className="lg:col-span-2">
            <Tabs defaultValue="personal" className="w-full">
              <CardHeader>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent>
                {/* Personal Info Tab */}
                <TabsContent value="personal" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john.doe@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        defaultValue="Passionate full stack developer with 5+ years of experience building scalable web applications."
                        rows={4}
                      />
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </TabsContent>

                {/* Experience Tab */}
                <TabsContent value="experience" className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Work Experience</h3>
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" /> Add Experience
                    </Button>
                  </div>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Senior Developer</h4>
                          <p className="text-sm text-muted-foreground">
                            TechCorp Inc.
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Jan 2022 - Present
                          </p>
                          <p className="text-sm mt-2">
                            Led development of customer-facing features.
                            Mentored junior developers.
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Software Developer</h4>
                          <p className="text-sm text-muted-foreground">
                            StartupXYZ
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Jun 2019 - Dec 2021
                          </p>
                          <p className="text-sm mt-2">
                            Built RESTful APIs and implemented frontend features
                            using React.
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Education Tab */}
                <TabsContent value="education" className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Education</h3>
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" /> Add Education
                    </Button>
                  </div>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">
                            Bachelor of Science in Computer Science
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Stanford University
                          </p>
                          <p className="text-xs text-muted-foreground">
                            2015 - 2019
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
