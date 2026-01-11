"use client"

import React, { useState } from 'react';
import { Mail, Phone, ChevronDown, ChevronUp, Shield, Lock, Eye, Database, Cookie, Share2, FileText, AlertCircle, UserX, Globe, Bell } from 'lucide-react';

export default function PrivacyPolicy() {
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
      title: "Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: [
        "We may collect the following types of information:",
        "",
        "a) Personal Information:",
        "• Name",
        "• Email address",
        "• Phone number",
        "• Business or project details shared via contact forms, email, or communication channels",
        "",
        "b) Non-Personal Information:",
        "• Browser type and device information",
        "• IP address",
        "• Pages visited and interaction data",
        "• Cookies and usage analytics"
      ]
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: [
        "The information we collect may be used to:",
        "",
        "• Respond to inquiries and provide requested services",
        "• Communicate regarding projects, updates, or support",
        "• Improve our website, services, and user experience",
        "• Send relevant updates or promotional communication (only when appropriate)",
        "",
        "We do not sell or rent your personal information to third parties under any circumstances."
      ]
    },
    {
      id: 3,
      title: "Cookies & Tracking Technologies",
      icon: <Cookie className="w-5 h-5" />,
      content: [
        "Our website may use cookies and similar technologies to:",
        "",
        "• Analyze website traffic and performance",
        "• Understand user behavior and preferences",
        "• Enhance your browsing experience",
        "",
        "You can choose to disable cookies through your browser settings, though some features may not function properly without them.",
        "",
        "We use industry-standard analytics tools to better understand how visitors interact with our website."
      ]
    },
    {
      id: 4,
      title: "Data Sharing & Third Parties",
      icon: <Share2 className="w-5 h-5" />,
      content: [
        "We may share limited information with trusted third-party tools or services only when necessary for:",
        "",
        "• Website hosting and infrastructure",
        "• Analytics and performance monitoring",
        "• Project execution and delivery",
        "• Payment processing (if applicable)",
        "",
        "These third parties are contractually required to maintain confidentiality and comply with applicable data protection laws.",
        "",
        "We carefully vet all third-party services to ensure they meet our privacy and security standards."
      ]
    },
    {
      id: 5,
      title: "Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: [
        "We implement reasonable and industry-standard security measures to protect your information from unauthorized access, misuse, alteration, or disclosure.",
        "",
        "Security measures include:",
        "• Encrypted data transmission (SSL/TLS)",
        "• Secure server infrastructure",
        "• Access controls and authentication",
        "• Regular security audits and updates",
        "",
        "However, no online transmission or storage method is completely secure, and we cannot guarantee absolute security. We continuously monitor and improve our security practices."
      ]
    },
    {
      id: 6,
      title: "Client Confidentiality",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "All project-related information, business details, and proprietary data shared with iKRA Studio is treated as strictly confidential.",
        "",
        "This information is used solely for:",
        "• Project planning and execution",
        "• Internal team coordination",
        "• Delivering agreed-upon services",
        "",
        "We will not disclose, share, or showcase any confidential project information without your explicit written permission.",
        "",
        "Non-disclosure agreements (NDAs) can be signed upon request for additional protection."
      ]
    },
    {
      id: 7,
      title: "Third-Party Links",
      icon: <Globe className="w-5 h-5" />,
      content: [
        "Our website may contain links to third-party websites, tools, or resources for your convenience.",
        "",
        "iKRA Studio is not responsible for:",
        "• The privacy practices of external sites",
        "• The content or accuracy of third-party websites",
        "• Data collected by external platforms",
        "",
        "We strongly encourage you to review the privacy policies of any third-party websites you visit through our links.",
        "",
        "Links to external sites do not imply endorsement or responsibility for their practices."
      ]
    },
    {
      id: 8,
      title: "Your Rights",
      icon: <FileText className="w-5 h-5" />,
      content: [
        "You have the following rights regarding your personal information:",
        "",
        "• Access: Request a copy of the personal data we hold about you",
        "• Correction: Request correction of inaccurate or incomplete data",
        "• Deletion: Request deletion of your personal data (subject to legal obligations)",
        "• Withdrawal: Withdraw consent for marketing communications at any time",
        "• Portability: Request transfer of your data in a structured format",
        "",
        "To exercise any of these rights, please contact us using the information provided at the end of this policy.",
        "",
        "We will respond to your request within a reasonable timeframe, typically within 30 days."
      ]
    },
    {
      id: 9,
      title: "Children's Privacy",
      icon: <UserX className="w-5 h-5" />,
      content: [
        "Our services and website are not intended for individuals under the age of 13.",
        "",
        "We do not knowingly collect, use, or store personal information from minors without parental consent.",
        "",
        "If we become aware that we have inadvertently collected personal information from a child under 13, we will take immediate steps to delete such information from our records.",
        "",
        "Parents or guardians who believe their child has provided us with personal information should contact us immediately."
      ]
    },
    {
      id: 10,
      title: "Data Retention",
      icon: <AlertCircle className="w-5 h-5" />,
      content: [
        "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy.",
        "",
        "Retention periods depend on:",
        "• The nature of the information collected",
        "• Legal and regulatory requirements",
        "• Business and operational needs",
        "• Project completion and warranty periods",
        "",
        "Once the retention period expires or you request deletion, we will securely delete or anonymize your personal data.",
        "",
        "Certain information may be retained for legal compliance or dispute resolution purposes."
      ]
    },
    {
      id: 11,
      title: "Changes to This Policy",
      icon: <Bell className="w-5 h-5" />,
      content: [
        "iKRA Studio reserves the right to update, modify, or revise this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or business operations.",
        "",
        "Any changes will be:",
        "• Posted on this page with an updated 'Last Updated' date",
        "• Effective immediately upon posting",
        "• Communicated via email for significant changes (where applicable)",
        "",
        "Your continued use of our website or services following any changes constitutes acceptance of the updated Privacy Policy.",
        "",
        "We encourage you to review this policy periodically to stay informed about how we protect your information."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Header */}
      <header className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white text-black rounded-full mb-6 sm:mb-8 shadow-2xl">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-widest mb-4 sm:mb-6">
              iKRA STUDIO
            </h1>
            <div className="w-24 sm:w-32 h-px bg-white mx-auto mb-4 sm:mb-6 opacity-60"></div>
            <p className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.2em] sm:tracking-[0.3em] opacity-90 mb-2 px-4">
              DESIGN, CODE, CRAFT
            </p>
            <p className="text-xs sm:text-sm tracking-widest opacity-60 uppercase mt-6 sm:mt-8">
              Privacy Policy
            </p>
            <p className="text-xs tracking-wider opacity-50 mt-2">
              Last updated: January 10, 2026
            </p>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="bg-gray-50 border-l-4 sm:border-l-8 border-black p-6 sm:p-10 md:p-12 shadow-sm mb-12 sm:mb-16">
          <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-4 sm:mb-6 text-gray-800">
            At iKRA Studio, we value your privacy and are committed to protecting the personal information you share with us.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-gray-700">
            This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website or engage with our services. Please read carefully before using our services.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="space-y-4 sm:space-y-6">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className="bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex items-center justify-between text-left focus:outline-none focus:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-1">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-black text-white flex items-center justify-center shadow-md">
                    {section.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs tracking-widest text-gray-500 mb-1 sm:mb-2 uppercase">
                      Section {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-base sm:text-xl md:text-2xl font-light tracking-wide text-black wrap-break-word">
                      {section.title}
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 ml-2 sm:ml-4">
                  {expandedSections[section.id] ? (
                    <ChevronUp className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                  ) : (
                    <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                  )}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSections[section.id] ? 'max-h-500 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-10 pt-2">
                  <div className="pl-8 sm:pl-16 md:pl-20 border-l-2 border-gray-200 space-y-3 sm:space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-black text-white p-6 sm:p-10 md:p-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide mb-3 sm:mb-4">
                YOUR PRIVACY MATTERS
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                We are committed to transparency in how we handle your data. If you have any questions, concerns, or requests regarding your personal information, we're here to help. This policy complies with applicable Indian data protection laws and international best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-black text-white p-8 sm:p-12 md:p-16 shadow-2xl">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-3 sm:mb-4">
              CONTACT INFORMATION
            </h3>
            <div className="w-20 sm:w-24 h-px bg-white mx-auto opacity-40"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-8 sm:mb-10 font-light px-4">
              For privacy-related inquiries or to exercise your data rights, please reach out to us:
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <a 
                href="mailto:ikrastudio09@gmail.com" 
                className="flex items-center justify-center gap-3 sm:gap-5 text-white hover:text-gray-300 transition-colors group py-3 sm:py-4 border-b border-gray-700 hover:border-gray-500"
              >
                <Mail size={20} className="sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-sm sm:text-base md:text-lg font-light tracking-wide break-all">
                  ikrastudio09@gmail.com
                </span>
              </a>
              
              <a 
                href="tel:+918983985787" 
                className="flex items-center justify-center gap-3 sm:gap-5 text-white hover:text-gray-300 transition-colors group py-3 sm:py-4 border-b border-gray-700 hover:border-gray-500"
              >
                <Phone size={20} className="sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-sm sm:text-base md:text-lg font-light tracking-wide">
                  +91 89839 85787
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm text-gray-400 tracking-widest uppercase px-4">
            © 2026 iKRA Studio · All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}