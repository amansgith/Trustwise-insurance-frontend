import dynamic from 'next/dynamic';
import Link from 'next/link';
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Users, Briefcase, Heart, Zap } from 'lucide-react';
import Image from 'next/image';

// Dynamically import components
const TrustBanner = dynamic(() => import('@/components/CommonComponents/Banner'));
const ContactUs = dynamic(() => import('@/components/CommonComponents/ContactUs'));
const FAQSection = dynamic(() => import('@/components/CommonComponents/FAQ'));
const Features = dynamic(() => import('@/components/Features'));
const QuoteForm = dynamic(() => import('@/components/CommonComponents/GetQuote'));

const JoinOurTeam = () => {
  const cultureItems = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with a diverse team of passionate individuals',
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Opportunities for learning and advancement',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work options',
    },
    {
      icon: Zap,
      title: 'Innovative Projects',
      description: 'Work on cutting-edge technologies and solutions',
    },
  ];

  const jobOpenings = [
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'New York, NY',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'London, UK',
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-cover bg-opacity-10 text-primary-foreground py-20 text-center" style={{ backgroundImage: "url('https://highrise.mikado-themes.com/wp-content/uploads/2016/10/Team-Title-1-1.jpg')" }}>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl mb-8">
              Be part of something extraordinary. We're looking for talented individuals to help shape the future.
            </p>
            <Button asChild size="lg">
              <Link href="#openings">View Open Positions</Link>
            </Button>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-[#2a80b4] font-bold text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <item.icon className="w-10 h-10 mb-2 text-[#9ecb75]" />
                    <CardTitle className="text-[#9ecb75]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section id="openings" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-primary font-bold text-center mb-12">Current Openings</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {jobOpenings.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.department} · {job.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild>
                      <Link href={`/apply?job=${encodeURIComponent(job.title)}`}>Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl text-primary font-bold text-center mb-12">Apply Today</h2>
            <Card>
              <CardHeader />
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" aria-label="First Name" />
                    <Input placeholder="Last Name" aria-label="Last Name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input type="email" placeholder="Email" aria-label="Email" />
                    <Input type="phone" placeholder="Phone" aria-label="Phone" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="cv">Upload CV/Resume</label>
                    <Input id="cv" type="file" />
                  </div>
                  <Textarea rows={5} placeholder="Tell us about your experience and why you'd be a great fit" aria-label="Cover Letter" />
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default memo(JoinOurTeam);