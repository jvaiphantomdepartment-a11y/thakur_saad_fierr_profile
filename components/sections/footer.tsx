"use client";

import { Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props extends React.ComponentProps<"div"> {}

export const Footer = ({ ...props }: Props) => {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
        <div className="grid gap-8   sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 font-bold">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                S
              </div>
              <span>Saad</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Full Stack Developer with AI Integration Expertise, specializing
              in MERN/MEAN stack and cross-platform mobile development.
            </p>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-transparent"
              asChild
            >
              <a href="https://www.linkedin.com/authwall">
                <Linkedin className="size-5" />
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">thakursaad613@gmail.com</li>
              <li className="text-muted-foreground">01302926831</li>
              <li className="text-muted-foreground">Mohakhali,Dhaka</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
