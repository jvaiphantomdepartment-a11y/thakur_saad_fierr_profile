"use client";

import {
  AboutMe,
  ClientReviews,
  Footer,
  GetInTouch,
  Hero,
  Nav,
  ProjectSection,
  SkillSection,
  WorkExperience,
} from "@/components/sections";

export default function PortfolioPage() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <AboutMe />
      <SkillSection />
      <WorkExperience />
      <ProjectSection />
      <ClientReviews />
      <GetInTouch />
      <Footer />
    </div>
  );
}
