"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons/lib";

export const InfiniteMovingItems = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  iconClassName,
  itemClassName,
}: {
  items: React.ReactNode[] | IconType[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards",
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse",
          );
        }
      }

      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
      setStart(true);
    }
  }, [direction, speed]);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((Item, idx) => (
          <li
            className={cn(
              "relative w-fit shrink-0 border border-border",
              itemClassName,
            )}
            key={idx}
          >
            {Item instanceof Function ? (
              <Item className={iconClassName} />
            ) : (
              Item
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const cardQuoteItem = (item: {
  name: string;
  quote: string;
  title: string;
}) => {
  return (
    <li
      className="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]"
      style={{
        background:
          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
      }}
      key={item.name}
    >
      <blockquote>
        <div
          aria-hidden="true"
          className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        ></div>
        <span className="relative z-20 text-sm font-normal leading-[1.6] text-gray-100">
          {item.quote}
        </span>
        <div className="relative z-20 mt-6 flex flex-row items-center">
          <span className="flex flex-col gap-1">
            <span className="text-sm font-normal leading-[1.6] text-gray-400">
              {item.name}
            </span>
            <span className="text-sm font-normal leading-[1.6] text-gray-400">
              {item.title}
            </span>
          </span>
        </div>
      </blockquote>
    </li>
  );
};
