import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Shield,
  FileText,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function Contact({ inquiryPrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'Website Design & Architecture',
    budget: '$5,000 – $15,000',
    timeline: '1 Month',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [transmissionId, setTransmissionId] = useState('');

  useEffect(() => {
    if (inquiryPrefill) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiry regarding: ${inquiryPrefill}\n\nOur primary objectives: `,
      }));
    }
  }, [inquiryPrefill]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.organization.trim()) errs.organization = 'Company or project name is required.';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your project vision.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTransmissionId(`MV-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  return (
    <div className="w-full relative overflow-hidden bg-background text-on-surface pt-space-lg pb-space-xl">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-primary/10 rounded-full blur-[150px] opacity-70"></div>
      <div className="pointer-events-none absolute top-1/2 -right-64 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-[160px] opacity-40"></div>

      <div className="max-w-[1200px] mx-auto px-gutter relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-space-lg">
          <div className="inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-md shadow-[0_0_20px_rgba(171,115,255,0.18)] mb-space-md border border-outline-variant/30">
            <span className="text-primary text-xs">✦</span>
            <span className="font-manrope text-xs uppercase tracking-widest text-primary-fixed font-semibold">
              Initiate Transmission
            </span>
            <span className="text-secondary text-xs">✦</span>
          </div>

          <h1 className="font-space-grotesk text-3xl sm:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight leading-tight">
            Let’s Create Something{' '}
            <span className="text-secondary drop-shadow-[0_0_35px_rgba(181,197,251,0.45)] font-cinzel">
              Amazing.
            </span>
          </h1>

          <div className="mt-2">
            <span className="font-script text-2xl text-primary font-normal">
              direct celestial communication
            </span>
          </div>

          <p className="font-inter text-base sm:text-lg text-on-surface-variant mt-space-sm leading-relaxed">
            Ready to ascend beyond the ordinary? Share your venture brief with our senior architectural leads. We analyze every brief and respond with an actionable scoping roadmap in under 24 hours.
          </p>
        </div>

        {/* Main Grid: Direct Contact Channels & Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Hubs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Channel Cards */}
            <div className="p-6 rounded-3xl bg-surface-container/60 border border-outline-variant/30 backdrop-blur-xl shadow-xl space-y-4">
              <h3 className="font-space-grotesk text-xl font-bold text-on-surface flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Direct Studio Coordinates</span>
              </h3>

              <div className="space-y-3 pt-2">
                <a
                  href="mailto:moonvyradigitaldesignstudio@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-manrope text-xs font-semibold text-secondary uppercase tracking-wider">
                      Official Inquiries
                    </div>
                    <div className="font-inter text-xs sm:text-sm text-on-surface truncate group-hover:text-primary transition-colors">
                      moonvyradigitaldesignstudio@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/moonvyra_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary-container/30 text-secondary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-manrope text-xs font-semibold text-secondary uppercase tracking-wider">
                      Instagram Showcase
                    </div>
                    <div className="font-inter text-xs sm:text-sm text-on-surface group-hover:text-secondary transition-colors">
                      @moonvyra_
                    </div>
                  </div>
                </a>

                <a
                  href="tel:9000777244"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-manrope text-xs font-semibold text-secondary uppercase tracking-wider">
                      Direct Voice / Signal
                    </div>
                    <div className="font-inter text-xs sm:text-sm text-on-surface font-mono group-hover:text-primary transition-colors">
                      9000777244
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Protocol Guarantees */}
            <div className="p-6 rounded-3xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-xl space-y-3">
              <h4 className="font-manrope text-xs font-bold text-on-surface uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Our Onboarding Standard:</span>
              </h4>
              <ul className="space-y-2 text-xs font-inter text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                  <span>Guaranteed roadmap response within 24 hours of brief reception.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Mutual non-disclosure agreement (NDA) executed prior to deep architecture reviews.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                  <span>Direct consultation with senior leads—no junior account delegates.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Brief Intake Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest/90 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-5 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-primary-container/20 border border-primary/50 text-primary mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(171,115,255,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs text-secondary tracking-widest">
                    TRANSMISSION LOGGED: {transmissionId}
                  </span>
                  <h3 className="font-space-grotesk text-2xl sm:text-3xl font-bold text-on-surface">
                    Signal Successfully Received
                  </h3>
                  <p className="font-inter text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed pt-1">
                    Thank you, <strong className="text-on-surface">{formData.name}</strong>. Our lead design architect has received your briefing for <strong className="text-primary">{formData.organization}</strong> and will transmit an actionable proposal to <span className="text-primary font-mono">{formData.email}</span> within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-container text-left max-w-md mx-auto border border-outline-variant/30 text-xs font-inter space-y-1.5 text-on-surface-variant">
                  <div className="flex justify-between">
                    <span className="text-outline">Service Scope:</span>
                    <span className="text-on-surface font-medium">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-outline">Estimated Budget:</span>
                    <span className="text-on-surface font-medium">{formData.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-outline">Target Cadence:</span>
                    <span className="text-on-surface font-medium">{formData.timeline}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      organization: '',
                      service: 'Website Design & Architecture',
                      budget: '$5,000 – $15,000',
                      timeline: '1 Month',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full font-manrope font-semibold text-xs text-on-surface bg-surface-container-high hover:bg-surface-container-highest transition-colors"
                >
                  Send another transmission
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-on-surface">
                    Project Briefing Protocol
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-on-surface-variant mt-1">
                    Please provide project parameters to help us prepare your scoping roadmap.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-manrope text-xs font-semibold text-on-surface-variant block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Orion Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-surface-container-high/80 border text-on-surface placeholder:text-outline text-sm focus:outline-none transition-all font-inter ${
                          errors.name
                            ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
                            : 'border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-error text-[11px] font-inter mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="font-manrope text-xs font-semibold text-on-surface-variant block mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="orion@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-surface-container-high/80 border text-on-surface placeholder:text-outline text-sm focus:outline-none transition-all font-inter ${
                          errors.email
                            ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
                            : 'border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-error text-[11px] font-inter mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Organization & Scope Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-manrope text-xs font-semibold text-on-surface-variant block mb-1">
                        Organization / Venture *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chrono Labs"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-surface-container-high/80 border text-on-surface placeholder:text-outline text-sm focus:outline-none transition-all font-inter ${
                          errors.organization
                            ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
                            : 'border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary'
                        }`}
                      />
                      {errors.organization && (
                        <p className="text-error text-[11px] font-inter mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.organization}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="font-manrope text-xs font-semibold text-on-surface-variant block mb-1">
                        Primary Capability Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-high/80 border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter"
                      >
                        <option value="Website Design & Architecture">Website Design & Architecture</option>
                        <option value="UI/UX Interface Systems">UI/UX Interface Systems</option>
                        <option value="Web Engineering & Performance">Web Engineering & Performance</option>
                        <option value="Branding & Identity System">Branding & Identity System</option>
                        <option value="High-Impact Landing Page Sprint">High-Impact Landing Page Sprint</option>
                        <option value="Full Flagship Digital Ecosystem">Full Flagship Digital Ecosystem</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-manrope text-xs font-semibold text-on-surface-variant block mb-1">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-high/80 border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter"
                      >
                        <option value="Under $5,000">Under $5,000 (Focused Sprint)</option>
                        <option value="$5,000 – $15,000">$5,000 – $15,000 (Standard Release)</option>
                        <option value="$15,000 – $35,000">$15,000 – $35,000 (Flagship Ecosystem)</option>
                        <option value="$35,000+">$35,000+ (Institutional Architecture)</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-manrope text-xs font-semibold text-on-surface-variant block mb-1">
                        Desired Launch Cadence
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-high/80 border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter"
                      >
                        <option value="Rapid Sprint (< 2 Weeks)">Rapid Sprint (&lt; 2 Weeks)</option>
                        <option value="1 Month">1 Month</option>
                        <option value="2 – 3 Months">2 – 3 Months</option>
                        <option value="Ongoing Evolution">Ongoing Retainer</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="font-manrope text-xs font-semibold text-on-surface-variant block mb-1">
                      Project Vision & Goals *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your target audience, key functional needs, design preferences, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-container-high/80 border text-on-surface placeholder:text-outline text-sm focus:outline-none transition-all font-inter resize-none ${
                        errors.message
                          ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
                          : 'border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-error text-[11px] font-inter mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-3.5 rounded-full font-manrope font-semibold text-sm text-on-primary bg-gradient-to-r from-primary-container via-primary to-secondary shadow-[0_0_20px_rgba(171,115,255,0.4)] hover:shadow-[0_0_30px_rgba(171,115,255,0.6)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
                        <span>Transmitting to Orbital Gateway...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center font-inter text-[11px] text-on-surface-variant/80 pt-1">
                    ✦ All inquiries are protected under automatic mutual NDA protocol.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
