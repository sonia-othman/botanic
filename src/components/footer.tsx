// components/FooterWithMap.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowUp,
  Clock
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Showroom', href: '/showroom' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Landscape Design', href: '#' },
      { name: 'Green Roof Systems', href: '#' },
      { name: 'Irrigation Systems', href: '#' },
      { name: 'Artificial Plants', href: '#' },
      { name: 'Water Proofing', href: '#' },
    ]
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/17MmwWctzy/?mibextid=wwXIfr',
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/botanic_ltd?igsh=OWRuNnNyY3V2cG5r',
      icon: Instagram,
      color: 'hover:text-pink-600'
    }
  ];

  const contactInfo = {
    phone: '+964 (770) 097 2727',
    email: 'botanic.landscape@gmail.com',
    address: 'Sulaimaniyah, Malik Mahmood',
    mapUrl: 'https://maps.app.goo.gl/6MkK63eoR68hyZDf7',
    workingHours: 'Sat - Thu: 10:00 AM - 11:00 PM',
    mapImageUrl: 'https://maps.app.goo.gl/6MkK63eoR68hyZDf7'
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-green-900 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/image/botonicwhite.png" 
          alt="Footer Background" 
          fill
          className="object-cover opacity-10"
          priority={false}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image 
                src="/image/botonicwhite.png" 
                alt="Botanic Company" 
                width={80} 
                height={80} 
                className="object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming spaces with innovative landscaping solutions since 2012. 
              Your trusted partner for green environments in Iraq.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${item.color} transition transform hover:scale-110`}
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-3 text-gray-300">
              <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Working Hours</p>
                <p className="text-sm">{contactInfo.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition flex items-center group"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Our Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition flex items-center group"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Get In Touch</h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-white transition"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            {/* Map Image Box */}
            <div className="bg-gray-800/50  rounded-lg overflow-hidden border border-gray-700 hover:border-white transition group cursor-pointer ">
              <a
                href={contactInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-48 bg-accent overflow-hidden">
                  {/* Actual Map Image */}
                  <Image 
                    src="/image/map1.png" 
                    alt="Our Location Map" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/20 transition-colors duration-300"></div>
                </div>
                
                {/* Map Footer */}
                <div className="px-4 py-3 bg-white  flex items-center justify-between">
                  <span className="text-gray-900 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-700" />
                    View on Google Maps
                  </span>
                  
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white  text-green-700 p-3 rounded-full shadow-lg transition transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

  
    </footer>
  );
}