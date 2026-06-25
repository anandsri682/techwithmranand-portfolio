import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { Stats } from "@/components/Stats";
import { Content } from "@/components/Content";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { LoadingScreen } from "@/components/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech with Mr Anand — All My Links" },
      { name: "description", content: "Premium link hub for Tech with Mr Anand — YouTube, Instagram, LinkedIn, WhatsApp, Telegram and more. Tech, AI, education and career content." },
      { property: "og:title", content: "Tech with Mr Anand — All My Links" },
      { property: "og:description", content: "Follow Mr Anand across YouTube, Instagram, LinkedIn and more for tech, AI and career content." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen text-foreground">
      <LoadingScreen />
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <SocialLinks />
        <Content />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
}
