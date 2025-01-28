import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from 'lucide-react';
import chefImage from '@/assets/portrait-happy-male-chef-dressed-uniform 1.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';

const About = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  }
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <div className='bg-primaryBackground p-4 py-12 rounded-3xl mb-8'>
        {/* Hero Section */}
        <div className="text-center mb-16 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bringing Good Food Into
            <span className="text-primary"> Your Everyday Life</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is to share the joy of cooking and bring people together through delicious, home-cooked meals. We believe that everyone can be a great cook with the right recipes and guidance.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "15k+", label: "Recipes" },
            { number: "100k+", label: "Active Users" },
            { number: "500+", label: "Expert Chefs" },
            { number: "1M+", label: "Community Members" },
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center cursor-pointer">
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>

      </div>
      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center my-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2020, we started with a simple idea: make cooking accessible and enjoyable for everyone. What began as a small collection of family recipes has grown into a vibrant community of food lovers sharing their passion for cooking.
          </p>
          <p className="text-gray-600">
            Today, we're proud to offer thousands of tested recipes, cooking tips, and a supportive community that helps home cooks of all skill levels discover the joy of creating delicious meals.
          </p>
        </div>
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <img
            src={chefImage}
            alt="Our kitchen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className='flex flex-col md:flex-row  justify-between gap-4 py-16'>
        {/* Contact Section */}
        <Card className="p-8 mb-16 w-full">
          <h2 className="text-3xl font-bold mb-8 ">Get in Touch</h2>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-gray-600">hello@foodie.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-600">123 Foodie Street, NY</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 w-full">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                className="w-full p-6"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                className="w-full p-6"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <Input
              id="subject"
              placeholder="How can we help?"
              required
              className="w-full p-6"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message..."
              required
              className="w-full p-6 min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full bg-primary text-white p-6">
            Send Message
          </Button>
        </form>
      </div>

    </div>
  )
}

export default About