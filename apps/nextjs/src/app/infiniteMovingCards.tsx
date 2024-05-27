"use client";

import React from "react";

import { InfiniteMovingCards } from "@saasfly/ui/infinite-moving-cards";

export function InfiniteMovingCardss() {
  return (
    <div className="dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-slate-50 antialiased dark:bg-black">
      <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
    </div>
  );
}

const reviews = [
  {
    quote:
      "Brilliant work! Their team work to  my vision and brought it to life, in a way that exceeded my expectations. The website they designed is not only visually stunning but also highly functional and user-friendly",
    name: "Mohammed",
    title: "Verified Buyer",
  },
  {
    quote:
      "Working with them was very easy. Their commitment to delivering a top-notch product is truly commendable. I couldn't be happier, and my website has already started attracting more clients.",
    name: "Zainab",
    title: "Verified Buyer",
  },
  {
    quote:
      "As a small business owner, I was initially hesitant to invest in a website design. However, after seeing the incredible work done by this agency, I can confidently say it was worth every penny. They have given my brand a strong online presence.",
    name: "Siraj",
    title: "Verified Buyer",
  },
  {
    quote:
      "From start to finish, the entire process was seamless and professional. They took the time to understand my brand and translated it into a beautiful and engaging website. I highly recommend their services.",
    name: "Amir",
    title: "Verified Buyer",
  },
];
