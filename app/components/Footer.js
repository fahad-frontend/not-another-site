import Logo from './Logo';
import Rule from './Rule';

export default function Footer() {
  return (
    <footer
      id='footer'
      className='bg-white text-black px-6 md:px-10 lg:px-16 py-16 md:py-24'
      data-theme='light'
    >
      <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-12'>
        <div className='flex flex-col gap-6'>
          <a
            href='#top'
            className='flex items-center shrink-0'
          >
            <Logo variant='footer' />
          </a>
          <div className='flex items-center gap-3'>
            <span
              className='eyebrow border px-3 py-1.5'
              style={{ borderColor: 'currentColor' }}
            >
              Remote · est. 2026
            </span>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          <FooterCol
            title="Sections"
            links={[
              { label: "What we do", href: "#what" },
              { label: "Pricing", href: "#pricing" },
              { label: "Why us", href: "#why" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ]}
          />
          <FooterCol
            title="Socials"
            links={[
              { label: "Twitter", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "Dribbble", href: "#" },
              { label: "GitHub", href: "#" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { label: "Terms", href: "#" },
              { label: "Privacy", href: "#" },
            ]}
          />
        </div> */}
        <span>Made with care. Not templates.</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='eyebrow opacity-60 mb-1'>{title}</div>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className='text-base md:text-lg hover:underline underline-offset-4 decoration-1 w-fit'
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
