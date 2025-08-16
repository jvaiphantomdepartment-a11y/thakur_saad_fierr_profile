"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data";
import { motion } from "framer-motion";
import { Briefcase, Star } from "lucide-react";

interface Props extends React.ComponentProps<"div"> {
  testimonial: (typeof testimonials)[number];
  i: number;
}

export const ReviewCards = ({ testimonial, i }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
      >
        <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex mb-4">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, j) => (
                  <Star
                    key={j}
                    className="size-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
            </div>

            <p className="text-lg mb-4 flex-grow">"{testimonial.quote}"</p>
            <div className="space-y-2 mt-auto pt-4 border-t border-border/40">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                <Briefcase className="size-3 mr-1" />
                {testimonial.project}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};
