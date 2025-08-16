"use client";

import fiverrLogo from "@/assets/fiverr-logo.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import {
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import Image from "next/image";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "thakursaad613@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "01302926831",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Mohakhali, Dhaka",
  },
];

export function GetInTouch() {
  return (
    <section id="contact" className="w-full py-20 md:py-32">
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
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let's Work Together
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="my-4 text-2xl font-lexend font-bold mt-8">
              Contact Information
            </h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, title, content }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                  >
                    <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="text-muted-foreground">{content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center items-center text-center h-full"
          >
            <Card className="overflow-hidden border border-border/40 bg-gradient-to-b from-card to-muted/10 backdrop-blur p-8 md:p-10 w-full max-w-md mx-auto soft-card">
              <CardContent className="flex flex-col items-center justify-center h-full space-y-6">
                <div className="size-20 rounded-full bg-gradient-to-br from-soft-purple-300 to-soft-purple-400 flex items-center justify-center text-white shadow-soft-lg mb-4">
                  <BriefcaseBusiness className="size-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">
                  Need a Full Stack Developer to Build Your Next Project?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-inter">
                  I'd love to help you bring your vision to life. With extensive
                  experience in MERN/MEAN stack development, I can build a
                  scalable and maintainable application tailored to your needs.
                  Let's connect and discuss how I can help you grow your
                  business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Button
                    size="lg"
                    className="neobrutalism-button h-14 px-8 text-lg font-semibold flex-1"
                    asChild
                  >
                    <a
                      // href="https://www.fiverr.com/solution_sqd"
                      href="https://www.fiverr.com/thakur_saad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={fiverrLogo}
                        alt="Fiverr Logo"
                        width={100}
                        height={100}
                        className="size-6"
                      />
                      Place an order
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
