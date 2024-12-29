import { RainbowButton } from "@/components/ui/rainbow-button";
import React from "react";

export default function GetInTouch() {
  return (
    <RainbowButton
      onClick={() =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" })
      }>
      Contact Us
    </RainbowButton>
  );
}
