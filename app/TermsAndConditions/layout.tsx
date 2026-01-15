import React from "react";

export const metadata = {
  title: "Terms & Conditions | Ikra Studio Legal Agreement",
  description:
    "Review Ikra Studio’s terms and conditions outlining legal agreements, user responsibilities, and website usage policies.",
  robots: {
    index: false,
    follow: true,
  },
};


export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
