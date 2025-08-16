"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data";
import { motion } from "framer-motion";
import { Calendar, Check } from "lucide-react";
import { FadeText } from "../animated";

interface Props extends React.ComponentProps<"div"> {}

export const WorkExperience = ({ ...props }: Props) => {
  return (
    <section id="experience" className="w-full py-20 md:py-32 ">
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
            Experience
          </Badge>
          <FadeText
            className="text-3xl md:text-4xl font-bold tracking-tight"
            direction="up"
            text="Work Experience"
          />

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight"></h2>

          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            My professional journey in full-stack development and client
            success.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-border"></div>
              <div className="absolute left-[-4px] top-2 size-2 rounded-full bg-primary"></div>

              <Card className="ml-6 overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      <Calendar className="size-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <Check className="size-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
