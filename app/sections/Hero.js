'use client';

import { motion } from 'motion/react';
import Eyebrow from '../components/Eyebrow';
import Heading from '../components/Heading';
import CTABar from '../components/CTABar';

export default function Hero() {
  return (
    <section
      id='top'
      data-theme='dark'
      className='relative min-h-svh w-full bg-black text-white flex flex-col px-6 md:px-10 lg:px-16 pt-24 md:pt-28 pb-8'
    >
      <div className='max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between gap-6 md:gap-8 min-h-0'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Eyebrow>Design + Development Studio</Eyebrow>
        </motion.div>

        <div className='flex-1 flex items-center'>
          <div className='w-full flex flex-col gap-6 md:gap-8'>
            <Heading size='hero' as='h1'>
              {"You don't need another site.\nYou need one that actually delivers."}
            </Heading>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className='max-w-2xl text-base md:text-lg leading-relaxed text-white/70 border-l border-white/20 pl-4 md:pl-6'
            >
              We design and build websites and products that drive conversions,
              reduce friction, and scale with your business.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className='flex flex-col gap-3 w-full'
        >
          <CTABar href='#contact' variant='primary' theme='dark'>
            Start a project
          </CTABar>
          <CTABar href='#what' variant='outline' theme='dark'>
            See what we do
          </CTABar>
        </motion.div>

        <motion.a
          href='#lead'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className='self-center inline-flex items-center gap-2 eyebrow opacity-70 hover:opacity-100 transition-opacity'
        >
          <span>Scroll</span>
          <motion.span
            aria-hidden
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className='inline-block'
          >
            ↓
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
