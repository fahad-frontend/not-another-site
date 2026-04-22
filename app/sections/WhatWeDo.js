import Section from "../components/Section";
import Eyebrow from "../components/Eyebrow";
import Heading from "../components/Heading";
import BorderedGrid from "../components/BorderedGrid";
import Cell from "../components/Cell";

const PRINCIPLES = [
  {
    number: "01",
    label: "Built to convert.",
    subtext: "Not just look good.",
    body: "Your site should turn visitors into customers. Clear messaging, strong structure, and zero friction.",
  },
  {
    number: "02",
    label: "Fast, scalable, reliable.",
    subtext: "No hacks. No rebuilds in 6 months.",
    body: "We use modern stacks and solid architecture so your site grows with you, not against you.",
  },
  {
    number: "03",
    label: "Designed with strategy.",
    subtext: "Every decision has a reason.",
    body: "We don't guess. Layout, copy, and flows are built around your users and business goals.",
  },
  {
    number: "04",
    label: "No templates. No shortcuts.",
    subtext: "Built for you, from scratch.",
    body: "Everything is custom, because your business isn't generic, and your site shouldn't be either.",
  },
];

export default function WhatWeDo() {
  return (
    <Section id="what" theme="dark" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <Eyebrow>01 / What we do</Eyebrow>
          <Heading size="lg">Principles we build on.</Heading>
        </div>

        <BorderedGrid>
          {PRINCIPLES.map((p) => (
            <Cell
              key={p.number}
              number={p.number}
              label={p.label}
              subtext={p.subtext}
              body={p.body}
              theme="dark"
            />
          ))}
        </BorderedGrid>
      </div>
    </Section>
  );
}
