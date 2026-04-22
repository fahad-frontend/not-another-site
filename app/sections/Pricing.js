'use client';

import { motion } from 'motion/react';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Heading from '../components/Heading';
import Rule from '../components/Rule';
import CTABar from '../components/CTABar';

const PLANS = [
  {
    number: '01',
    name: 'Launch',
    price: 'PKR 60,000',
    timeline: '≈ 2 weeks',
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
    price: 'PKR 85,000',
    timeline: '≈ 4 weeks',
    included: [
      'Up to 6 pages',
      'Custom design + build',
      'CMS wiring (optional)',
      'SEO, a11y, analytics',
      '30 days of post-launch care',
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

export default function Pricing() {
  return (
    <Section id='pricing' theme='light' className='py-24 md:py-32'>
      <div className='max-w-6xl mx-auto w-full'>
        <div className='flex flex-col gap-4 mb-12 md:mb-16'>
          <Eyebrow>02 / Pricing</Eyebrow>
          <Heading size='lg'>Clear price. Clear scope.</Heading>
        </div>

        <div className='flex flex-col gap-16 md:gap-24'>
          {PLANS.map((plan, i) => (
            <PricingBlock key={plan.number} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function PricingBlock({ plan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, ease: [0.2, 0.6, 0.2, 1] }}
      className='border border-black'
    >
      <div className='relative border-b border-black p-8 md:p-12 lg:p-16 overflow-hidden'>
        <div className='flex items-start justify-between gap-6'>
          <div className='eyebrow opacity-60'>{plan.number} / Plan</div>
          <div className='eyebrow opacity-60'>{plan.timeline}</div>
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
        <div className='font-display font-semibold text-3xl md:text-5xl tracking-tight'>
          {plan.price}
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
