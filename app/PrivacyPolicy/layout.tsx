import React from "react";

export const metadata = {
  title: "Privacy Policy | Ikra Studio Data & Privacy Practices",
  description:
    "Learn how Ikra Studio collects, uses, stores, and protects personal information in accordance with data privacy and security practices.",
  robots: {
    index: false,
    follow: true,
  },
};


export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
