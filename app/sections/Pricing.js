'use client';

import { useLayoutEffect, useState } from 'react';
import { motion } from 'motion/react';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Heading from '../components/Heading';
import Rule from '../components/Rule';
import CTABar from '../components/CTABar';

/** IANA zone for Pakistan (PKT, year-round). */
const PAKISTAN_TZ = 'Asia/Karachi';

const PLANS = [
  {
    number: '01',
    name: 'Launch',
    introductory: true,
    pricePK: 'PKR 70,000',
    priceIntl: '$300',
    timeline: '≈ 1 week',
    included: [
      'One-page site',
      'Custom design + build',
      'Basic SEO + analytics',
      'Deploy + handoff',
    ],
  },
  {
    number: '02',
    name: 'Studio',
    introductory: true,
    pricePK: 'PKR 95,000',
    priceIntl: '$500',
    timeline: '≈ 3 weeks',
    included: [
      'Up to 10 pages',
      'Custom design + build',
      'SEO, a11y, analytics',
      'Ongoing care plan',
    ],
  },
  {
    number: '03',
    name: 'Complete',
    price: "Let's talk",
    timeline: '4–8 weeks',
    included: [
      'Unlimited pages',
      'Branding (optional)',
      'Integrations + CMS',
      'SEO, a11y, analytics',
      'Ongoing care plan',
    ],
  },
];

function getPlanPrice(plan, isPakistan) {
  if (plan.pricePK != null && plan.priceIntl != null) {
    return isPakistan ? plan.pricePK : plan.priceIntl;
  }
  return plan.price;
}

export default function Pricing() {
  const [isPakistan, setIsPakistan] = useState(false);

  useLayoutEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setIsPakistan(tz === PAKISTAN_TZ);
    } catch {
      setIsPakistan(false);
    }
  }, []);

  return (
    <Section id='pricing' theme='light' className='py-24 md:py-32'>
      <div className='max-w-6xl mx-auto w-full'>
        <div className='flex flex-col gap-4 mb-12 md:mb-16'>
          <Eyebrow>02 / Pricing</Eyebrow>
          <Heading size='lg'>Clear price. Clear scope.</Heading>
        </div>

        <div className='flex flex-col gap-16 md:gap-24'>
          {PLANS.map((plan) => (
            <PricingBlock
              key={plan.number}
              plan={plan}
              isPakistan={isPakistan}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function PricingBlock({ plan, isPakistan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, ease: [0.2, 0.6, 0.2, 1] }}
      className='relative border border-black'
    >
      {plan.introductory ? (
        <div
          className='pointer-events-none absolute right-0 top-0 z-20 w-[min(100%,18rem)] md:w-auto'
          style={{ paddingTop: '0.5rem', paddingRight: '0.25rem' }}
        >
          <div
            className='ml-auto w-fit bg-red-600 px-7 py-2 text-white shadow-[0_8px_28px_rgba(0,0,0,0.26)] md:px-9 md:py-2.5'
            style={{
              transform:
                'rotate(8deg) translateX(0.45rem) translateY(-0.05rem)',
              transformOrigin: '100% 0%',
            }}
          >
            <span className='font-mono text-xs font-medium uppercase tracking-[0.18em] md:text-sm'>
              Introductory Price
            </span>
          </div>
        </div>
      ) : null}

      <div className='relative border-b border-black p-8 md:p-12 lg:p-16'>
        <div className='flex items-start justify-between gap-6 pr-22 md:pr-36'>
          <div className='eyebrow opacity-60'>{plan.number} / Plan</div>
          <div className='eyebrow opacity-60 text-right'>{plan.timeline}</div>
        </div>
        <div
          className='mt-6 md:mt-10 font-display font-semibold uppercase tracking-tight leading-[0.9]'
          style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}
        >
          {plan.name}
        </div>
      </div>

      <Row label='Included'>
        <ul className='flex flex-col gap-2'>
          {plan.included.map((item) => (
            <li key={item} className='text-base md:text-lg leading-relaxed'>
              · {item}
            </li>
          ))}
        </ul>
      </Row>

      <Row label='Timeline'>
        <div className='font-display font-semibold text-2xl md:text-3xl tracking-tight'>
          {plan.timeline}
        </div>
      </Row>

      <Row label='Price'>
        <div
          className='font-display font-semibold text-3xl md:text-5xl tracking-tight'
          suppressHydrationWarning
        >
          {getPlanPrice(plan, isPakistan)}
        </div>
      </Row>

      <CTABar href={`#contact`} variant='primary' theme='light'>
        Start {plan.name}
      </CTABar>
    </motion.div>
  );
}

function Row({ label, children }) {
  return (
    <div className='border-b border-black'>
      <div className='grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 p-6 md:p-10 lg:p-12'>
        <div className='eyebrow opacity-60'>{label}</div>
        <div>{children}</div>
      </div>
      <Rule className='md:hidden' />
    </div>
  );
}
