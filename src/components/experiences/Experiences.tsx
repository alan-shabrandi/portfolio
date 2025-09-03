import Title from "../title/Title";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <section id="experience" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="5+ YEARS OF EXPERIENCE" des="My Experiences" />
      </div>{" "}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-max border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ExperienceCard
            title="Senior Frontend Developer"
            subTitle="Hamrah Aval + Mobin Tadbir Sharif"
            location="Tehran / Iran"
            date="02/2022 - Present"
            des="Since 2022, I have been working as a Senior Frontend Developer at Hamrah Aval and Mobin Tadbir Sharif, collaborating on several joint projects. During this time, I played a key role in large-scale, high-traffic platforms, including a video streaming and sharing service similar to YouTube and Aparat, and a cloud storage solution similar to Google Drive. I have also contributed significantly to the development of various admin panels, gaining valuable experience and advanced skills."
          />
          <ExperienceCard
            title="FullStack JavaScript Developer (React + NestJS) - Remote"
            subTitle="Bazaryonline Company"
            location="Kurdistan Region of Iraq"
            date="03/2019 - 08/2024"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
