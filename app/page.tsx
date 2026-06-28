import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { PageLayout } from "./components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <Intro />
    </PageLayout>
  );
}
