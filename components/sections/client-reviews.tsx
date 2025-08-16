"use client";

import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeText } from "../animated";
import { ReviewCards } from "../cards";
import { buttonVariants } from "../ui/button";

interface Props extends React.ComponentProps<"div"> {}

export const ClientReviews = ({ ...props }: Props) => {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 ">
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
            Client Reviews
          </Badge>

          <FadeText
            className="text-3xl md:text-4xl font-bold tracking-tight"
            direction="up"
            text="What Clients Say"
          />

          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Testimonials from satisfied clients across various projects.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.slice(0, 4).map((testimonial, i) => (
            <ReviewCards key={i} testimonial={testimonial} i={i} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-20 ">
          <Link
            href="/review"
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
