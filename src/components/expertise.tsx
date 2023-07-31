import { FC } from "react";
import CountUp from "react-countup";

interface IExpertiseProps {
  title: string;
  end: number;
}

export const Expertise: FC<IExpertiseProps> = ({ end, title }) => {
  return (
    <div
      className="relative flex-1 after:absolute after:right-0 after:top-0 
        after:h-full after:w-[0.063rem] after:bg-white/10"
    >
      <div
        className="mb-2 text-2xl font-extrabold text-accent 
          xl:text-4xl 2xl:text-5xl"
      >
        <CountUp start={0} end={end} duration={5} /> +
      </div>
      <span
        className="flex max-w-[6.25rem] text-xs uppercase 
          leading-[1.4] tracking-[0.063rem] 2xl:text-sm"
      >
        {title}
      </span>
    </div>
  );
};
