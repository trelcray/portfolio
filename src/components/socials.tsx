import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

export const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg xl:text-2xl">
      <a
        href="https://www.instagram.com/thaliszambarda/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-accent"
        aria-label="instagram icon link"
      >
        <RiInstagramLine />
      </a>
      <a
        href="https://github.com/trelcray/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-accent"
        aria-label="github icon link"
      >
        <RiGithubLine />
      </a>
      <a
        href="https://linkedin.com/in/thalis-zambarda/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-accent"
        aria-label="linkedin icon link"
      >
        <RiLinkedinLine />
      </a>
    </div>
  );
};
