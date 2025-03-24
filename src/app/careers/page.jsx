"use client";
import Link from 'next/link';
import { memo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Users, Briefcase, Heart, Zap } from 'lucide-react';

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

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    immigrationStatus: '',
    languages: [{ language: '', proficiency: '' }],
    phone: '',
    email: '',
    coverLetter: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLanguageChange = (index, field, value) => {
    const newLanguages = [...formData.languages];
    newLanguages[index][field] = value;
    setFormData({ ...formData, languages: newLanguages });
  };

  const addLanguage = () => {
    setFormData({
      ...formData,
      languages: [...formData.languages, { language: '', proficiency: '' }],
    });
  };

  const removeLanguage = (index) => {
    const newLanguages = formData.languages.filter((_, i) => i !== index);
    setFormData({ ...formData, languages: newLanguages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Application submitted successfully!');
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        immigrationStatus: '',
        languages: [{ language: '', proficiency: '' }],
        phone: '',
        email: '',
        coverLetter: '',
      });
    } else {
      alert('Failed to submit application.');
    }
  };

  const languageOptions = [
    "English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Hindi", "Arabic", "Portuguese"
  ];

  const proficiencyOptions = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
    { value: "Fluent", label: "Fluent" },
    { value: "Native", label: "Native" },
  ];

  return (
    <div className="flex flex-col min-h-screen my-16 md:my-8 ">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-cover bg-opacity-6 text-primary-foreground py-20 text-center" style={{ backgroundImage: "url('https://highrise.mikado-themes.com/wp-content/uploads/2016/10/Team-Title-1-1.jpg')" }}>
          <div className="absolute inset-0 bg-gray-500 bg-opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-white mb-8">
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <item.icon className="w-10 h-10 mb-2 text-secondary" />
                    <CardTitle className="text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      aria-label="First Name"
                    />
                    <Input
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      placeholder="Middle Name"
                      aria-label="Middle Name"
                    />
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      aria-label="Last Name"
                    />
                  </div>
                  <Input
                    name="immigrationStatus"
                    value={formData.immigrationStatus}
                    onChange={handleInputChange}
                    placeholder="Immigration Status"
                    aria-label="Immigration Status"
                  />
                  <div className="space-y-4">
                    {formData.languages.map((language, index) => (
                      <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <select
                          name={`language-${index}`}
                          value={language.language}
                          onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
                          className="w-full p-2 border rounded"
                          aria-label="Language"
                        >
                          <option value="">Select Language</option>
                          {languageOptions.map((lang) => (
                            <option key={lang} value={lang}>{lang}</option>
                          ))}
                        </select>
                        <div className="flex items-center">
                          <select
                            name={`proficiency-${index}`}
                            value={language.proficiency}
                            onChange={(e) => handleLanguageChange(index, 'proficiency', e.target.value)}
                            className="w-full p-2 border rounded"
                            aria-label="Proficiency"
                          >
                            <option value="">Select Proficiency</option>
                            {proficiencyOptions.map((option) => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                          </select>
                          <button type="button" onClick={() => removeLanguage(index)} className="ml-2 text-red-500">Remove</button>
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={addLanguage} className="text-blue-500">Add Language</button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      aria-label="Phone"
                    />
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                  <Textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about your experience and why you'd be a great fit"
                    aria-label="Cover Letter"
                  />
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default memo(JoinOurTeam);