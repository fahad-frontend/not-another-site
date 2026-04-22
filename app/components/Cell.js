'use client';

import { motion } from 'motion/react';

export default function Cell({
  label,
  subtext,
  body,
  number,
  className = '',
  theme = 'dark',
}) {
  const hoverBg = theme === 'dark' ? 'hover:bg-white' : 'hover:bg-black';
  const hoverText = theme === 'dark' ? 'hover:text-black' : 'hover:text-white';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, ease: [0.2, 0.6, 0.2, 1] }}
      className={`group relative p-8 md:p-12 lg:p-16 min-h-[200px] md:min-h-[280px]
        flex flex-col justify-between transition-colors duration-300
        ${hoverBg} ${hoverText} ${className}`}
    >
      {number != null && <div className='eyebrow opacity-60'>{number}</div>}
      <div className='mt-auto'>
        <div className='display-md font-display'>{label}</div>
        {subtext && (
          <p className='mt-2 text-sm md:text-base italic opacity-80 max-w-md leading-snug'>
            {subtext}
          </p>
        )}
        {/* {body && (
          <p className="mt-3 text-sm md:text-base opacity-70 max-w-md leading-relaxed">
            {body}
          </p>
        )} */}
      </div>
    </motion.div>
  );
}
