"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { FadeText } from "../animated";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface Props extends React.ComponentProps<"div"> {
  project: (typeof projects)[number];
  i: number;
}

export const ProjectCards = ({ project, i }: Props) => {
  return (
    <motion.div key={i} variants={item}>
      <Card
        className={`h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg ${
          project.featured ? "md:col-span-2 lg:col-span-1" : ""
        }`}
      >
        <div className="relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
          {project.featured && (
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">
            {project.description.substring(1, 150)}...
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, j) => (
              <Badge key={j} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Link href={project?.liveUrl}>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 bg-transparent"
              >
                <ExternalLink className="mr-2 size-4" />
                Live Demo
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
