import { Header } from "./components/Header";
import { PageLayout } from "./components/PageLayout";
import { ProjectItem } from "./components/ProjectItem";
import { Section } from "./components/Section";
import { workProjects, sideProjects } from "./data/projects";

export default function Home() {
  return (
    <PageLayout>
      <Header />

      <Section title="work">
        {workProjects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </Section>

      <Section title="projects">
        {sideProjects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </Section>
    </PageLayout>
  );
}
