"use client";

import { cn } from "../utils/cn";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [prevDocumentHeight, setPrevDocumentHeight] = useState(0);
  const meteors = new Array(number || 20).fill(true);

  useEffect(() => {
    const currentDocumentHeight = document.body.offsetHeight;

    console.log(`Offset: ${document.body.offsetHeight}`);
    console.log(`ScrollH: ${document.body.scrollHeight}`);
    console.log(`Window Innert: ${document.body.scrollHeight}`);

    if (currentDocumentHeight !== prevDocumentHeight) {
      setPrevDocumentHeight(currentDocumentHeight);
    }
  }, [prevDocumentHeight]);

  return (
    <div className="absolute w-full h-full overflow-hidden -z-10">
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent ",
            className
          )}
          style={{
            top: Math.floor(Math.random() * prevDocumentHeight + -400) + "px",
            left: Math.floor(Math.random() * prevDocumentHeight + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (20 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </div>
  );
};
