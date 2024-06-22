import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {ThemeProvider } from "@/components/ui/theme-provider"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Govind Ghosh",
  description:
    "Welcome to my portfolio! I am a dedicated frontend developer with a strong proficiency in HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Redux, and Next.js. My backend skills include MongoDB, Express.js, Node.js, Firebase, and Appwrite. I graduated from Dr. Bhim Rao Ambedkar University, and I am passionate about creating seamless user experiences and efficient web applications. Explore my projects and connect with me on GitHub at https://github.com/Govindghosh, LinkedIn at https://www.linkedin.com/in/govind-web-developer/, X at https://twitter.com/govind_ghosh, and Instagram at https://www.instagram.com/govindghosh0/.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Welcome to my portfolio! I am a dedicated frontend developer with a strong proficiency in HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Redux, and Next.js. My backend skills include MongoDB, Express.js, Node.js, Firebase, and Appwrite. I graduated from Dr. Bhim Rao Ambedkar University, and I am passionate about creating seamless user experiences and efficient web applications. Explore my projects and connect with me on GitHub at https://github.com/Govindghosh, LinkedIn at https://www.linkedin.com/in/govind-web-developer/, X at https://twitter.com/govind_ghosh, and Instagram at https://www.instagram.com/govindghosh0/."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Portfolio | Govind Ghosh" />
        <meta
          property="og:description"
          content="Welcome to my portfolio! I am a dedicated frontend developer with a strong proficiency in HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Redux, and Next.js. My backend skills include MongoDB, Express.js, Node.js, Firebase, and Appwrite."
        />
        <meta
          property="og:url"
          content="https://www.instagram.com/govindghosh0/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.instagram.com/govindghosh0/"
        />

        {/* Twitter  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Govind Ghosh" />
        <meta
          name="twitter:description"
          content="Welcome to my portfolio! I am a dedicated frontend developer with a strong proficiency in HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Redux, and Next.js. My backend skills include MongoDB, Express.js, Node.js, Firebase, and Appwrite."
        />
        <meta name="twitter:image" content="https://x.com/govind_ghosh/photo" />
        <meta name="twitter:site" content="@govind_ghosh" />

        {/* Additional SEO */}
        <meta
          name="keywords"
          content="Frontend Developer, HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Redux, Next.js, MongoDB, Express.js, Node.js, Firebase, Appwrite, Portfolio, Govind Ghosh"
        />
        <meta name="author" content="Govind Ghosh" />
        <link rel="canonical" href="https://your-portfolio-website.com" />

        <title>Portfolio | Govind Ghosh</title>
      </head>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
