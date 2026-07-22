import { createFileRoute } from "@tanstack/react-router";
import { BornToGiveSite } from "@/components/site/BornToGiveSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Born To Give Foundation — Together We Can Change Lives" },
      {
        name: "description",
        content:
          "Born To Give Foundation supports children and families with food, essentials, and community outreach. Donate, volunteer, and restore hope with us.",
      },
      { property: "og:title", content: "Born To Give Foundation — Together We Can Change Lives" },
      {
        property: "og:description",
        content:
          "Born To Give Foundation supports children and families with food, essentials, and community outreach. Donate, volunteer, and restore hope with us.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BornToGiveSite,
});
