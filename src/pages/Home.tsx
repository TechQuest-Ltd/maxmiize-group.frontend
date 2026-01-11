import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LinkPreview } from '@/components/ui/link-preview';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <Navbar />

      <main className='grow'>
        {/* Hero Section */}
        <section className='py-16 md:py-24 lg:py-32 px-6 bg-linear-to-b from-gray-50 to-white'>
          <div className='max-w-5xl mx-auto text-center'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 md:mb-8'>
              Maxmiize Sports Group
            </h1>
            <p className='text-sm md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 md:mb-12'>
              A global basketball innovation company connecting technology, player development, and storytelling.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-2'>
              <Button
                onClick={() => navigate('/privacy')}
                className='inline-flex items-center justify-center bg-[#5D82C2] hover:bg-[#4a6ba3] text-white transition-all duration-300 w-full sm:w-auto'
              >
                Privacy Policy
              </Button>
              <Button
                variant='outline'
                onClick={() => navigate('/contact')}
                className='inline-flex items-center justify-center bg-white hover:bg-[#5D82C2] hover:text-white text-[#5D82C2] border-[#5D82C2] transition-all duration-300 w-full sm:w-auto'
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className='py-8 md:py-12 bg-white'>
          <div className='max-w-5xl mx-auto px-6'>
            <div className='grid md:grid-cols-2 gap-10 md:gap-16'>
              {/* Purpose */}
              <div className='space-y-4'>
                <h2 className='text-lg md:text-xl font-bold text-slate-900'>Purpose</h2>
                <p className='text-sm md:text-base text-slate-600 leading-relaxed'>
                  To serve as the umbrella for all ventures related to basketball performance, technology, education,
                  and culture, including software, camps, training, and media.
                </p>
              </div>

              {/* Mission */}
              <div className='space-y-4'>
                <h2 className='text-lg md:text-xl font-bold text-slate-900'>Mission</h2>
                <p className='text-sm md:text-base text-slate-600 leading-relaxed'>
                  To help athletes and coaches maximize their vision, growth, and performance through innovation and
                  culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className='py-12 md:py-20 bg-gray-50'>
          <div className='max-w-4xl mx-auto px-6'>
            <h2 className='text-lg md:text-xl font-bold text-slate-900 mb-6'>Technology</h2>
            <div className='space-y-5'>
              <p className='text-sm md:text-base text-slate-600 leading-relaxed'>
                Maxmiize Sports Group LLC develops performance analysis and video intelligence tools for professional
                and elite basketball programs.
              </p>
              <p className='text-sm md:text-base text-slate-600 leading-relaxed'>
                Our software helps teams capture, analyze, and optimize performance through advanced video workflows and
                data-driven insights.
              </p>
              <p className='text-sm md:text-base text-slate-600'>
                Learn more at{' '}
                <LinkPreview url='https://maxmiize.app' className='font-medium text-[#5D82C2]'>
                  maxmiize.app
                </LinkPreview>{' '}
                →
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className='py-12 md:py-20 bg-white'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-lg md:text-xl font-bold text-slate-900 mb-6'>Get in Touch</h2>
            <a
              href='mailto:info@maxmiize.com'
              className='inline-block text-base md:text-lg text-[#5D82C2] hover:text-[#4a6ba3] font-medium transition-colors duration-200'
            >
              info@maxmiize.com
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
