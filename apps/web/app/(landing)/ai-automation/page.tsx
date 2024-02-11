import { Suspense } from "react";
import { Metadata } from "next";
import { Hero } from "@/app/(landing)/home/Hero";
// import { LogoCloud } from "@/app/(landing)/home/LogoCloud";
import { Testimonials } from "@/app/(landing)/home/Testimonials";
import { Pricing } from "@/app/(app)/premium/Pricing";
import { FAQs } from "@/app/(landing)/home/FAQs";
import { CTA } from "@/app/(landing)/home/CTA";
import { FeaturesAutomation } from "@/app/(landing)/home/Features";
import { BasicLayout } from "@/components/layouts/BasicLayout";

export const metadata: Metadata = {
  title: "AI Email Automation | Syncade",
  description:
    "Syncade's AI automation streamlines your email management. It intelligently manages recurring questions, automates replies, and organizes your inbox efficiently, optimizing your email workflow for maximum efficiency..",
  alternates: { canonical: "/ai-automation" },
};

export default function AiAutomation() {
  return (
    <BasicLayout>
      <Hero
        title="Automate your email with AI"
        subtitle="Syncade's AI automation streamlines your email management. It intelligently manages recurring questions, automates replies, and organizes your inbox efficiently, optimizing your email workflow for maximum efficiency."
        image="/images/ai-automation.png"
      />
      {/* <LogoCloud /> */}
      <Testimonials />
      <FeaturesAutomation />
      <Suspense>
        <Pricing />
      </Suspense>
      <FAQs />
      <CTA />
    </BasicLayout>
  );
}
