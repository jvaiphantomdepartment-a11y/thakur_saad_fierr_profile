"use client";

import { Badge } from "@/components/ui/badge";
import { projects } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeText } from "../animated";
import { ProjectCards } from "../cards";
import { buttonVariants } from "../ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface Props extends React.ComponentProps<"div"> {}

export const ProjectSection = ({ ...props }: Props) => {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Projects
          </Badge>
          <FadeText
            className="text-3xl md:text-4xl font-bold tracking-tight"
            direction="up"
            text="All Projects"
          />
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            A showcase of my recent work and technical capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.slice(0, 6).map((project, i) => (
            <ProjectCards key={i} project={project} i={i} />
          ))}
        </motion.div>

        <div className="flex items-center justify-center mt-10">
          <Link
            href={"/projects"}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-3xl",
            })}
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};
