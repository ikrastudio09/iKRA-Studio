"use client"

import React, { useState } from 'react';
import { Mail, Phone, ChevronDown, ChevronUp, FileText, Code, Palette, Globe, Zap, Shield, CreditCard, Users, Clock, AlertTriangle, Ban, BookOpen, Scale, Edit3 } from 'lucide-react';

export default function TermsAndConditions() {
  interface ExpandedSections {
    [key: number]: boolean;
  }

  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});

  const toggleSection = (id: number): void => {
    setExpandedSections((prev: ExpandedSections) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sections = [
    {
      id: 1,
      title: "About iKRA Studio",
      icon: <Palette className="w-5 h-5" />,
      content: [
        "iKRA Studio is a digital design and development studio offering comprehensive services including:",
        "• Website Design & Development - Creating responsive, modern web experiences",
        "• UI/UX Design - Crafting intuitive and engaging user interfaces",
        "• Branding & Logo Design - Building memorable brand identities",
        "• Graphic Design - Delivering impactful visual communications",
        "• Performance Optimization - Ensuring fast, efficient digital solutions",
        "• Maintenance & Support - Providing ongoing technical assistance",
        "",
        "All services are provided based on mutually agreed project scope, timelines, and deliverables defined in our project agreements."
      ]
    },
    {
      id: 2,
      title: "Acceptance of Terms",
      icon: <FileText className="w-5 h-5" />,
      content: [
        "By accessing this website or engaging our services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions in their entirety.",
        "",
        "If you do not agree with any part of these Terms, you must immediately cease using our website and refrain from engaging our services.",
        "",
        "These Terms constitute a legally binding agreement between you (the 'Client') and iKRA Studio (the 'Studio')."
      ]
    },
    {
      id: 3,
      title: "Services & Scope",
      icon: <Globe className="w-5 h-5" />,
      content: [
        "• All projects are executed based on a mutually agreed scope of work, documented in writing prior to project commencement.",
        "",
        "• Any changes, additions, or modifications outside the agreed scope may require additional time, resources, and cost adjustments.",
        "",
        "• Project timelines are estimates based on the complexity of work, feedback cycles, and client responsiveness. Delays in client feedback or approval may extend delivery timelines.",
        "",
        "• We reserve the right to use third-party tools, plugins, frameworks, and services to deliver optimal results for your project."
      ]
    },
    {
      id: 4,
      title: "Payments & Pricing",
      icon: <CreditCard className="w-5 h-5" />,
      content: [
        "• All pricing is communicated clearly and finalized before project initiation through a written proposal or agreement.",
        "",
        "• Payment structures may vary by project and can include: advance payment, milestone-based payments, or full payment upon completion.",
        "",
        "• All payments made are non-refundable unless explicitly stated otherwise in a separate written agreement.",
        "",
        "• Delayed payments may result in project suspension, delayed delivery, or termination of services. Interest charges may apply to overdue payments.",
        "",
        "• We accept payments via bank transfer, UPI, or other mutually agreed methods. Payment confirmations must be shared promptly."
      ]
    },
    {
      id: 5,
      title: "Intellectual Property",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "• Upon receipt of full payment, ownership of the final approved deliverables is transferred to the Client, unless otherwise specified in writing.",
        "",
        "• iKRA Studio retains the perpetual right to showcase completed work in its portfolio, website, social media, case studies, and promotional materials.",
        "",
        "• All concepts, drafts, wireframes, prototypes, and unused designs remain the exclusive intellectual property of iKRA Studio.",
        "",
        "• The Client warrants that all materials provided (content, images, logos, etc.) are either owned by them or used with proper authorization.",
        "",
        "• iKRA Studio is not liable for any copyright or trademark infringement arising from client-provided materials."
      ]
    },
    {
      id: 6,
      title: "Client Responsibilities",
      icon: <Users className="w-5 h-5" />,
      content: [
        "Clients agree to fulfill the following responsibilities:",
        "",
        "• Provide accurate, complete, and timely information, content, assets, and materials required for the project.",
        "",
        "• Respond to feedback requests, questions, and approval requests in a timely manner to avoid project delays.",
        "",
        "• Ensure they have the legal rights to all materials (text, images, logos, videos) provided to iKRA Studio.",
        "",
        "• Review deliverables thoroughly at each stage and provide clear, actionable feedback.",
        "",
        "• Delays caused due to lack of client input, unresponsiveness, or incomplete information may affect project timelines and are not the responsibility of iKRA Studio."
      ]
    },
    {
      id: 7,
      title: "Revisions & Feedback",
      icon: <Edit3 className="w-5 h-5" />,
      content: [
        "• A reasonable number of revisions are included as per the agreed project scope and will be specified in the proposal.",
        "",
        "• Excessive revisions or changes beyond the agreed scope may be subject to additional charges at our standard hourly rate.",
        "",
        "• Client approval at each project stage (wireframes, design mockups, development phases) is considered final before proceeding to the next phase.",
        "",
        "• Major changes or alterations after approval may be treated as new project requirements and billed accordingly.",
        "",
        "• All feedback must be consolidated and provided in writing via email or project management tools for proper documentation."
      ]
    },
    {
      id: 8,
      title: "Third-Party Tools & Services",
      icon: <Zap className="w-5 h-5" />,
      content: [
        "iKRA Studio may utilize third-party tools, frameworks, hosting providers, plugins, or services to deliver high-quality results.",
        "",
        "We are not responsible for:",
        "• Downtime, service interruptions, or technical issues caused by third-party service providers",
        "• Future changes in third-party pricing, licensing, or service policies",
        "• Compatibility issues arising from third-party updates or changes",
        "",
        "Any ongoing costs for third-party services (hosting, domains, premium plugins, etc.) are the responsibility of the Client unless otherwise agreed."
      ]
    },
    {
      id: 9,
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        "iKRA Studio shall not be held liable for:",
        "",
        "• Any indirect, incidental, consequential, or punitive damages arising from the use of our services or deliverables",
        "",
        "• Loss of data, revenue, business opportunities, or profits",
        "",
        "• Issues, damages, or losses arising from client misuse, modification, or unauthorized use of delivered products",
        "",
        "• Third-party service failures, security breaches, or technical issues beyond our control",
        "",
        "Our total liability is strictly limited to the amount paid by the Client for the specific service in question. This limitation applies regardless of the form of action, whether in contract, tort, negligence, or otherwise."
      ]
    },
    {
      id: 10,
      title: "Maintenance & Support",
      icon: <Clock className="w-5 h-5" />,
      content: [
        "• Post-delivery maintenance and technical support are provided only if explicitly agreed upon in a separate maintenance agreement.",
        "",
        "• Standard project delivery includes a limited support period (as specified in the proposal) for bug fixes and technical issues related to the delivered work.",
        "",
        "• Support requests outside the agreed scope, timeline, or for issues arising from client modifications may incur additional charges.",
        "",
        "• Ongoing maintenance packages are available and can be discussed separately based on client requirements."
      ]
    },
    {
      id: 11,
      title: "Termination",
      icon: <Ban className="w-5 h-5" />,
      content: [
        "Either party may terminate a project with written notice. In the event of termination:",
        "",
        "• Work completed up to the point of termination will be billed at the agreed rates",
        "",
        "• All advance payments made are non-refundable",
        "",
        "• All intellectual property rights to unfinished, incomplete, or draft work remain exclusively with iKRA Studio",
        "",
        "• The Client must settle all outstanding invoices within 7 business days of termination",
        "",
        "• iKRA Studio may terminate services immediately for non-payment, breach of terms, or abusive behavior without refund"
      ]
    },
    {
      id: 12,
      title: "Privacy & Confidentiality",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "• Any personal, business, or proprietary information shared with iKRA Studio is handled with strict confidentiality and professionalism.",
        "",
        "• We will not share client information with third parties except where required by law or necessary for project execution (e.g., hosting providers, payment processors).",
        "",
        "• Both parties agree to keep confidential any sensitive business information disclosed during the course of the project.",
        "",
        "• For detailed information on data handling, please refer to our Privacy Policy."
      ]
    },
    {
      id: 13,
      title: "Changes to Terms",
      icon: <BookOpen className="w-5 h-5" />,
      content: [
        "• iKRA Studio reserves the right to update, modify, or revise these Terms & Conditions at any time without prior notice.",
        "",
        "• Any changes will be effective immediately upon posting on this website.",
        "",
        "• Continued use of our website or services following any updates implies acceptance of the revised Terms.",
        "",
        "• It is the Client's responsibility to review these Terms periodically to stay informed of any changes."
      ]
    },
    {
      id: 14,
      title: "Governing Law & Dispute Resolution",
      icon: <Scale className="w-5 h-5" />,
      content: [
        "• These Terms & Conditions are governed by and construed in accordance with the laws of India.",
        "",
        "• Any disputes, claims, or disagreements arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.",
        "",
        "• Both parties agree to attempt to resolve disputes amicably through good-faith negotiation before pursuing legal action.",
        "",
        "• In case of any legal proceedings, the prevailing party shall be entitled to recover reasonable attorney fees and costs."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Header */}
      <header className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white text-black rounded-full mb-8 shadow-2xl">
              <FileText className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-6 animate-fade-in">
              iKRA STUDIO
            </h1>
            <div className="w-32 h-px bg-white mx-auto mb-6 opacity-60"></div>
            <p className="text-xl md:text-2xl font-light tracking-[0.3em] opacity-90 mb-2">
              DESIGN, CODE, CRAFT
            </p>
            <p className="text-sm tracking-widest opacity-60 uppercase mt-8">
              Terms & Conditions
            </p>
            <p className="text-xs tracking-wider opacity-50 mt-2">
              Last updated: January 10, 2026
            </p>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-6 py-2 md:py-8">
        <div className="bg-gray-50 border-l-8 border-black p-10 md:p-12 shadow-sm mb-16">
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-6 text-gray-800">
            Welcome to iKRA Studio. By accessing or using our website and services, you agree to comply with and be bound by the following Terms & Conditions.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            These Terms constitute a legally binding agreement between you (the "Client") and iKRA Studio (the "Studio"). Please read them carefully before engaging with our services. If you do not agree to these Terms, you must refrain from using our website or services.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className="bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-8 py-8 flex items-center justify-between text-left focus:outline-none focus:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-6 flex-1">
                  <div className="shrink-0 w-14 h-14 bg-black text-white flex items-center justify-center shadow-md">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs tracking-widest text-gray-500 mb-2 uppercase">
                      Section {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl md:text-2xl font-light tracking-wide text-black">
                      {section.title}
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 ml-4">
                  {expandedSections[section.id] ? (
                    <ChevronUp className="w-7 h-7 text-black" />
                  ) : (
                    <ChevronDown className="w-7 h-7 text-black" />
                  )}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSections[section.id] ? 'max-h-500 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-10 pt-2">
                  <div className="pl-20 border-l-2 border-gray-200 space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed font-light text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-black text-white p-12 md:p-16 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light tracking-widest mb-4">
              CONTACT INFORMATION
            </h3>
            <div className="w-24 h-px bg-white mx-auto opacity-40"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-center mb-10 font-light text-lg">
              For any questions regarding these Terms & Conditions, please reach out to us:
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:ikrastudio09@gmail.com" 
                className="flex items-center justify-center gap-5 text-white hover:text-gray-300 transition-colors group py-4 border-b border-gray-700 hover:border-gray-500"
              >
                <Mail size={24} className="text-white group-hover:scale-110 transition-transform" />
                <span className="text-lg font-light tracking-wide">ikrastudio09@gmail.com</span>
              </a>
              
              <a 
                href="tel:+918983985787" 
                className="flex items-center justify-center gap-5 text-white hover:text-gray-300 transition-colors group py-4 border-b border-gray-700 hover:border-gray-500"
              >
                <Phone size={24} className="text-white group-hover:scale-110 transition-transform" />
                <span className="text-lg font-light tracking-wide">+91 89839 85787</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}