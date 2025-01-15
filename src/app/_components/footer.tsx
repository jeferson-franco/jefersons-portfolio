import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-slate-900 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js, TailwindCSS, and TypeScript.
          </h3>
          <div className="flex justify-center space-x-4 py-6">
            <a href="https://github.com/jeferson-franco">GitHub</a>
            <a href="https://linkedin.com/in/franco-jeferson">LinkedIn</a>
            <a href="mailto:jefersonfranco@pm.me">Email</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
