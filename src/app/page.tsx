import { ContactCta } from "../components/contact-cta";
import { ExperienceStrip } from "../components/experience-strip";
import { FeaturedProject } from "../components/featured-project";
import { Hero } from "../components/hero";
import { NotesPreview } from "../components/notes-preview";
import { ProjectCards } from "../components/project-cards";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-14 px-6 py-12 text-slate-100 md:px-10 lg:gap-16">
      <Hero />
      <FeaturedProject />
      <ProjectCards />
      <ExperienceStrip />
      <NotesPreview />
      <ContactCta />
    </main>
  );
}
