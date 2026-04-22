import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Heading from '../components/Heading';
import FAQItem from '../components/FAQItem';

const FAQS = [
  {
    q: 'What makes your sites convert?',
    a: 'Every decision is tied to a goal. We start with your users and what you want them to do, then design the copy, layout, and flows around that. Fewer distractions, clearer messaging, and a funnel that actually leads somewhere.',
  },
  {
    q: 'How long does it take to launch?',
    a: 'Most projects ship in two to six weeks. A landing page can be live in about two. A full product site with a CMS and integrations is closer to six. We lock the timeline before kickoff and stick to it. No rolling deadlines.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Pricing depends on scope, not hours. Landing sites start around PKR 60,000, full marketing sites sit in the PKR 85,000–120,000 range, and product sites go up from there. You get a fixed price in writing before we start, so there are no surprises.',
  },
  {
    q: "What if I don't like the direction?",
    a: "We share work early and often, not one big reveal at the end. You'll see the direction after the first week and give feedback in rounds. If something's off, we rework it. No project ships until you're genuinely happy with it.",
  },
  {
    q: 'Will I need to rebuild again later?',
    a: "No. That's the point. We build on stacks (Next.js, clean component systems, real CMS wiring) that scale with you for years. You can add pages, features, and integrations without tearing it down. That's what \"the last site you'll need\" means.",
  },
  {
    q: 'Who owns everything?',
    a: 'You do. The code, the designs, the domain, the hosting, the analytics. All transferred to your accounts on launch. No platform lock-in, no license fees, no us holding anything hostage if you ever want to move on.',
  },
];

export default function FAQs() {
  return (
    <Section id='faq' theme='light' className='py-24 md:py-32'>
      <div className='max-w-6xl mx-auto w-full'>
        <div className='flex flex-col gap-4 mb-12 md:mb-16'>
          <Eyebrow>04 / FAQ</Eyebrow>
          <Heading size='lg'>Questions.</Heading>
        </div>

        <div className='border-t' style={{ borderColor: 'currentColor' }}>
          {FAQS.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i + 1} />
          ))}
        </div>
      </div>
    </Section>
  );
}
