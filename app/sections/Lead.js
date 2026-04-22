import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import BorderedGrid from '../components/BorderedGrid';
import Cell from '../components/Cell';

const PRINCIPLES = [
  {
    label: 'Typography first.',
    body: 'Words carry weight. We set them with care.',
  },
  { label: 'Sharp + boxy.', body: 'No rounded corners hiding weak ideas.' },
  {
    label: 'Motion as meaning.',
    body: "Animations earn their place, or they're cut.",
  },
  { label: 'No templates.', body: 'Every site is built from scratch. Yours.' },
];

export default function Lead() {
  return (
    <Section id='lead' theme='dark' className='py-24 md:py-32'>
      <div className='max-w-6xl mx-auto w-full'>
        <p className='font-display font-medium text-2xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-4xl'>
          We work with brands who outgrew their site, and need one partner to
          design it, build it, and ship it right.
        </p>
      </div>
    </Section>
  );
}
