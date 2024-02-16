"use client";

import { GithubIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { usePostHog } from "posthog-js/react";

export function CTAButtons() {
  const posthog = usePostHog();

  return (
    <div className="mt-10 grid items-center justify-center gap-x-6 gap-y-2 sm:flex">
      <Button
        size="2xl"
        link={{ href: "/welcome" }}
        onClick={() => {
          posthog.capture("Clicked Get Started");
        }}
      >
        Get Started for Free
      </Button>
    </div>
  );
}
