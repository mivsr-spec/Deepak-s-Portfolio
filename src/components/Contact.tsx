import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Link as LinkIcon, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
  initialEstimateDetails?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService, initialEstimateDetails }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'YouTube Video Editing',
    budget: '$100 - $300',
    footageLink: '',
    message: initialEstimateDetails || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (initialEstimateDetails) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n${initialEstimateDetails}` : initialEstimateDetails,
      }));
    }
  }, [initialService, initialEstimateDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] text-[#333333] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B4A] bg-[#FF6B4A]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Ready to work together? Send over your project details and let me bring your vision to life.
          </p>
        </div>

        {/* 3 Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-sm hover:shadow-lg transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B4A]/10 text-[#FF6B4A] flex items-center justify-center shrink-0 group-hover:bg-[#FF6B4A] group-hover:text-white transition-all">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-neutral-400 uppercase font-bold">Email Me</div>
              <a href="mailto:Deepakrawat58558@gmail.com" className="font-bold text-[#1A1A1A] text-sm sm:text-base hover:text-[#FF6B4A] transition-colors break-all">
                Deepakrawat58558@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-sm hover:shadow-lg transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B4A]/10 text-[#FF6B4A] flex items-center justify-center shrink-0 group-hover:bg-[#FF6B4A] group-hover:text-white transition-all">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-neutral-400 uppercase font-bold">Phone / WhatsApp</div>
              <a href="tel:+919870847162" className="font-bold text-[#1A1A1A] text-sm sm:text-base hover:text-[#FF6B4A] transition-colors">
                +91 987 084 7162
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-sm hover:shadow-lg transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B4A]/10 text-[#FF6B4A] flex items-center justify-center shrink-0 group-hover:bg-[#FF6B4A] group-hover:text-white transition-all">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-neutral-400 uppercase font-bold">Location</div>
              <div className="font-bold text-[#1A1A1A] text-sm sm:text-base">
                Banbasa, Uttarakhand, INDIA 262310
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
