import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

export const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <a
        href="https://www.instagram.com/thaliszambarda/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-accent"
      >
        <RiInstagramLine />
      </a>
      <a
        href="https://github.com/trelcray/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-accent"
      >
        <RiGithubLine />
      </a>
      <a
        href="https://linkedin.com/in/thalis-zambarda/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-accent"
      >
        <RiLinkedinLine />
      </a>
    </div>
  );
};
