import LinkTransition from "@/components/utils/animations/link-transition";
import { Project } from "@/lib/interface";
import { cn } from "@/lib/utils";
import { getProjectList } from "@/utils/getProjects";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default async function ProjectFeatured({
  numberOfProject,
  hasLink = false,
  hasTitle = true,
  className,
}: {
  numberOfProject?: number;
  hasLink?: boolean;
  hasTitle?: boolean;
  className?: string;
}) {
  const projectData: Project[] = await getProjectList(numberOfProject);
  const resProject: Project[] = await getProjectList();
  const countTotal: number = resProject.length;
  return (
    <div
      className={cn(
        "relative z-50 mt-20 flex h-full flex-col items-center justify-center overflow-x-hidden px-5 py-10",
        className,
      )}
    >
      <div className="flex flex-col gap-20">
        {hasTitle && (
          <div className="mx-auto flex w-[90%] flex-col sm:w-[80%]">
            <p className="text-right text-6xl text-orange-400 sm:translate-y-10 sm:text-7xl lg:text-8xl">
              {countTotal || 0}
            </p>
            <p className="text-center font-clashDisplay text-6xl font-bold sm:text-8xl lg:text-9xl">
              Featured Projects
            </p>
          </div>
        )}
        <div className="flex w-full flex-col items-center justify-between gap-20 sm:px-10">
          {projectData.map((item, i) => {
            // const projectImageUrl = item.heroImage.url
            //   ? urlFor(item.heroImage.url)?.url()
            //   : null;
            return (
              <div
                key={i + "project" + i}
                className="flex w-[80%] flex-col-reverse sm:flex-row sm:gap-5 sm:odd:ml-auto sm:odd:flex-row-reverse"
              >
                <ProjectCard
                  srcImage={item.heroImage.url || "/image-placeholder.png"}
                  title={item.title}
                  isEven={i % 2 === 0}
                  link={"/projects/" + item.slug}
                  time={new Date(item.time).getFullYear().toString()}
                />
                <div className="z-30 flex flex-col space-y-5">
                  <p
                    className={cn(
                      "text-pretty font-clashDisplay text-2xl font-medium text-orange-400 sm:text-4xl",
                      i % 2 === 0 && "sm:text-right",
                    )}
                  >
                    {i + 1}/{countTotal}
                  </p>
                </div>
              </div>
            );
          })}
          {hasLink ||
            (projectData.length < countTotal && (
              <LinkTransition
                href="/projects"
                className="group"
                icon={
                  <ArrowUpRight className="size-7 transition-all duration-500 group-hover:rotate-45 md:size-10" />
                }
              >
                All projects
              </LinkTransition>
            ))}
        </div>
      </div>
    </div>
  );
}
