"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FadeText } from "../animated";

interface Props extends React.ComponentProps<"div"> {}

const ServicesOffered = [
  "Full Stack Web Development (MERN / MEAN)",
  "AI Features & ChatGPT Integration",
  "Responsive UI with Tailwind CSS",
  "REST API Development & Integration",
  "Cross-Platform Mobile Apps with Flutter",
  "Custom Business Logic & Admin Dashboards",
];

export const AboutMe = ({ ...props }: Props) => {
  return (
    <section id="about" className="w-full py-10 md:py-32 ">
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
            About Me
          </Badge>

          <FadeText
            className="text-3xl md:text-4xl font-bold tracking-tight"
            direction="up"
            text="Passionate About Creating Digital Solutions"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              Hi, I’m Thakur — a passionate and results-driven MERN Stack
              Developer with over 1 year of real-world experience. I’ve
              cultivated a strong “can-do” attitude through building and
              shipping full-stack applications that solve real problems. My core
              stack includes React, Node.js, Express, and MongoDB, and I’m
              confident working across both frontend and backend to deliver
              complete solutions. I care deeply about writing clean code,
              building scalable systems, and crafting user experiences that
              actually make sense.
            </p>
            <p className="text-lg text-muted-foreground">
              What sets me apart is my commitment to building practical,
              adaptable, and future-proof products. I don’t just code to
              complete tasks — I design systems that grow with your business.
              Whether it’s building RESTful APIs, structuring complex app logic,
              or optimizing UI performance, I bring clarity and purpose to every
              line I write. Let’s team up and create something that’s not just
              functional — but remarkable.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-background border">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background border">
                <div className="text-2xl font-bold text-primary">5.0</div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background border">
                <div className="text-2xl font-bold text-primary">90%</div>
                <div className="text-sm text-muted-foreground">
                  Repeat Clients
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background border">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Services Offered</h3>
            <div className="space-y-4">
              {ServicesOffered.map((service, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="size-5 text-primary flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
