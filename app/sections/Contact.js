import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Heading from '../components/Heading';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <Section id='contact' theme='dark' className='py-24 md:py-32'>
      <div className='max-w-6xl mx-auto w-full'>
        <div className='flex flex-col gap-4 mb-12 md:mb-16'>
          <Eyebrow>05 / Contact</Eyebrow>
          <Heading size='xl'>Let&apos;s build the last one.</Heading>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start'>
          <ContactForm />

          <aside className='flex flex-col gap-8 lg:sticky lg:top-32'>
            <div>
              <div className='eyebrow opacity-60 mb-3'>Direct</div>
              <a
                href='mailto:hello@notanother.site'
                className='font-display text-xl md:text-2xl tracking-tight hover:underline underline-offset-4 decoration-1'
              >
                hello@notanother.site
              </a>
            </div>
            {/* <div>
              <div className="eyebrow opacity-60 mb-3">Availability</div>
              <p className="text-base md:text-lg opacity-80 leading-relaxed">
                Taking on 2 new projects for this quarter.
              </p>
            </div> */}
            <div>
              <div className='eyebrow opacity-60 mb-3'>Response time</div>
              <p className='text-base md:text-lg opacity-80 leading-relaxed'>
                Within 1 business day.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
}
