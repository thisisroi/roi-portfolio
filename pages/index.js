import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Journey from "../components/Journey";
import Skills from "../components/Skills";

const links = [
  {
    icon: "fab fa-discord",
    href: "https://discord.gg/zwVSuN4",
  },
  {
    icon: "fab fa-github",
    href: "https://github.com/thisisroi",
  },
];

function Home() {
  return (
    <div>
      <div>
        <Header
          image="https://cdn.discordapp.com/avatars/726953781903884388/4416bfee83b354e95b5964bc09c0f619.png?size=1024"
          title="Batuhan Kılıç"
          position="UI Designer / Front-end Developer"
          description="Hello, I am Batuhan Kılıç, a self-taught Front-end Developer with more than three years of work experience. Now I live in Baku, Azerbaijan. I am working own on different projects now. I enjoy presenting my projects to people. It makes me happier when people give good feedback about my work. I shared the Portfolio site I made as an open source on my Github account (Check Footer)."
          contact="https://discord.gg/zwVSuN4"
          links={links}
        />
        <Journey
          job="Part Time"
          projects="25+ Projects"
          experience="3 Years Job"
        />
        <Skills
          skills={[
            {
              name: "React",
              percent: 75,
            },
            {
              name: "Next.js",
              percent: 80,
            },
            {
              name: "Vue",
              percent: 25,
            },
            {
              name: "Tailwind",
              percent: 90,
            },
            {
              name: "CSS",
              percent: 95,
            },
            {
              name: "HTML",
              percent: 100,
            },
            {
              name: "Javascript",
              percent: 85,
            },
            {
              name: "SCSS",
              percent: 65,
            },
            {
              name: "Svelte",
              percent: 35,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Home;
