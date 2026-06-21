import Link from 'next/link';
import { Trophy, Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] border-t border-white/5 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="font-extrabold text-xl tracking-wider text-white">
                SPORTS<span className="text-primary">ADDA</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your ultimate sports destination. High quality, premium athletic gear, footwear, and equipment for enthusiasts and professional athletes alike.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                <MessageCircle className="h-5 w-5" /> {/* Represents WhatsApp */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Customer Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@sportsadda.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Arena Blvd, Stadium District</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Sports Adda. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <span>Designed for Champions</span>
            <span className="text-primary font-medium">WhatsApp Support Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
