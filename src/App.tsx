import React, { useState, useEffect, useCallback, Suspense } from "react";
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

const NotFound = React.lazy(() =>
  import("./components/NotFound").then((m) => ({ default: m.NotFound }))
);

export function App() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>("kids");
  const [currentPath, setCurrentPath] = useState(() =>
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const handleSelectCourse = useCallback((courseId: string) => {
    setSelectedAgeGroup(courseId);
  }, []);

  const normalizedPath = currentPath.replace(/\/+$/, "") || "/";
  const isHome =
    normalizedPath === "/" ||
    normalizedPath === "/index.html" ||
    normalizedPath.endsWith("/index.html") ||
    normalizedPath === "/gea";

  if (!isHome) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-gea-slate-50" />}>
        <NotFound
          onGoHome={() => {
            window.history.pushState({}, "", "/");
            setCurrentPath("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </Suspense>
    );
  }

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
