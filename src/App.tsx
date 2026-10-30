import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CoursesSection } from "./components/CoursesSection";
import { MethodologySection } from "./components/MethodologySection";
import { DifferentialsSection } from "./components/DifferentialsSection";
import { InsideSchoolSection } from "./components/InsideSchoolSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { EnrollmentSteps } from "./components/EnrollmentSteps";
import { FaqSection } from "./components/FaqSection";
import { ContactAndLocationSection } from "./components/ContactAndLocationSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export function App() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>("kids");

  const handleSelectCourse = (courseId: string) => {
    setSelectedAgeGroup(courseId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gea-slate-50 font-sans selection:bg-gea-yellow selection:text-gea-navy">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CoursesSection onSelectCourse={handleSelectCourse} />
        <MethodologySection />
        <DifferentialsSection />
        <InsideSchoolSection />
        <SocialProofSection />
        <EnrollmentSteps />
        <FaqSection />
        <ContactAndLocationSection selectedAgeGroup={selectedAgeGroup} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
