"use client";

import heroImg from "@/assets/projects/saad.png";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, ExternalLink, Mail, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SlidingNumber, TextShimmer } from "../animated";

interface Props extends React.ComponentProps<"div"> {}

export const Hero = ({ ...props }: Props) => {
  const [ratingValue, setRatingValue] = useState(1);

  useEffect(() => {
    if (ratingValue < 5) {
      const interval = setInterval(() => {
        setRatingValue((prevValue) => Math.min(prevValue + 1, 5));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [ratingValue]);

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden z-50">
      <div className="container px-4 md:px-6 relative">
        {/* <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Badge
              className="rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              <TextShimmer duration={2}>Available for Freelance</TextShimmer>
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-lexend">
              Professional{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Full Stack Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Full Stack Web Developer with expertise in building responsive,
              AI-powered websites and business applications using the MERN/MEAN
              stack. Skilled in React, Node.js, and MongoDB, with strong
              experience in API development, Tailwind CSS, and seamless ChatGPT
              integration. Also proficient in Flutter and Dart for
              cross-platform mobile apps.
              {/* Hi, I’m Thakur — a MERN Stack Developer with 1+ years of hands-on
              experience. I’ve built a strong “can-do” mindset and focus on
              delivering practical, scalable, and user-friendly solutions. I
              specialize in full-stack web apps using React, Node.js REST APIs,
              and MongoDB. Let’s collaborate to build something that not only
              works <br /> — but works brilliantly for your needs. */}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                >
                  <Award className="size-3 mr-1" />
                  200 + Projects
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800  "
                >
                  <Star className="size-3 mr-1 " />
                  <SlidingNumber value={ratingValue} padStart={false} />
                  <span className="ml-[2px]">Rating</span>
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                >
                  <Users className="size-3 mr-1" />
                  90% Repeat Clients
                </Badge>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className={buttonVariants({
                  className: "!rounded-full h-12 px-8 text-base ",
                  size: "lg",
                })}
              >
                <Mail className="mr-2 size-4" />
                Get In Touch
              </Link>
              <Link
                href="#projects"
                className={buttonVariants({
                  variant: "outline",
                  className: "!rounded-full h-12 px-8 text-base ",
                  size: "lg",
                })}
              >
                <ExternalLink className="mr-2 size-4" />
                View Projects
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20 lg:h-[500px] md:h-[400px] h-[300px] ">
                <Image
                  src={heroImg}
                  width={300}
                  height={300}
                  alt="Developer portrait"
                  className="w-full h-auto !rounded-2xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
