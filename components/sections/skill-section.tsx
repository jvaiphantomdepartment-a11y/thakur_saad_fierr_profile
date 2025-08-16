"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data";
import { motion } from "framer-motion";
import { FadeText } from "../animated";

interface Props extends React.ComponentProps<"div"> {}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const SkillSection = ({ ...props }: Props) => {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
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
            Skills
          </Badge>

          <FadeText
            className="text-3xl md:text-4xl font-bold tracking-tight"
            direction="up"
            text="Technical Expertise"
          />

          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Proficient in modern technologies and frameworks for building
            scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`size-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 bg-primary`}
                    >
                      <skill.icon className="size-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
