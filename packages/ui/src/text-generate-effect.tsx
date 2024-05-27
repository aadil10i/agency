"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, stagger, useAnimate } from "framer-motion";

import { cn } from "./utils/cn";

const TextGenerateEffectImpl = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    void animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      },
    );
  }, [scope.current, words]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-muted-foreground opacity-0 dark:text-muted-foreground"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className="max-w-[42rem] text-2xl leading-normal text-muted-foreground dark:text-muted-foreground sm:text-xl sm:leading-8">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export const TextGenerateEffect = dynamic(
  () => Promise.resolve(TextGenerateEffectImpl),
  {
    ssr: false,
  },
);
