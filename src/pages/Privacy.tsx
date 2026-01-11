import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <main className='grow bg-white'>
        <div className='max-w-3xl mx-auto px-6 py-16 md:py-20'>
          <h1 className='text-xl md:text-2xl font-bold text-slate-900 mb-12'>Privacy Policy</h1>

          <div className='space-y-10 text-slate-700'>
            {/* Privacy Policy */}
            <section>
              <p className='text-sm md:text-base leading-relaxed mb-4'>
                Maxmiize Sports Group LLC respects your privacy.
              </p>
              <p className='text-sm md:text-base leading-relaxed mb-4'>
                We do not sell or share personal data with third parties. Any information collected through our website
                or applications is used solely to provide and improve our services.
              </p>
              <p className='text-sm md:text-base leading-relaxed mb-4'>
                If you contact us, your information will only be used to respond to your inquiry.
              </p>
              <p className='text-sm md:text-base leading-relaxed'>
                For questions regarding this policy, please contact us at{' '}
                <a href='mailto:info@maxmiize.com' className='text-[#5D82C2] hover:text-[#4a6ba3] transition-colors duration-200'>
                  info@maxmiize.com
                </a>
              </p>
            </section>

            {/* Technology */}
            <section>
              <h2 className='text-lg md:text-xl font-semibold text-slate-900 mb-4'>Technology</h2>
              <p className='text-sm md:text-base leading-relaxed mb-3'>
                Maxmiize Sports Group LLC develops performance analysis and video intelligence tools for professional
                and elite basketball programs. Our software helps teams capture, analyze, and optimize performance
                through advanced video workflows and data-driven insights.
              </p>
              <p className='text-sm md:text-base leading-relaxed'>
                Learn more at{' '}
                <a
                  href='https://maxmiize.app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#5D82C2] hover:text-[#4a6ba3] transition-colors duration-200'
                >
                  maxmiize.app
                </a>
              </p>
            </section>

            {/* Contact */}
            <section className='pt-8 border-t border-gray-200'>
              <h2 className='text-lg md:text-xl font-semibold text-slate-900 mb-4'>Contact Us</h2>
              <p className='text-sm md:text-base'>
                <a href='mailto:info@maxmiize.com' className='text-[#5D82C2] hover:text-[#4a6ba3] transition-colors duration-200'>
                  info@maxmiize.com
                </a>
              </p>
              <p className='mt-8 text-xs text-slate-500'>© 2026 Maxmiize Sports Group LLC. All rights reserved.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
