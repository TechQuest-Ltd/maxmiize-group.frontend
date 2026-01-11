import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <main className='grow bg-white'>
        <div className='max-w-3xl mx-auto px-6 py-16 md:py-20'>
          <h1 className='text-xl md:text-2xl font-bold text-slate-900 mb-12'>Contact Us</h1>

          <div className='space-y-8'>
            {/* Email */}
            <div className='flex items-start gap-4'>
              <div className='w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0'>
                <Mail className='w-5 h-5 text-slate-700' />
              </div>
              <div>
                <h3 className='font-medium text-slate-900 mb-1 text-sm md:text-base'>Email</h3>
                <a href='mailto:info@maxmiize.com' className='text-[#5D82C2] hover:text-[#4a6ba3] transition-colors duration-200 text-sm md:text-base'>
                  info@maxmiize.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className='flex items-start gap-4'>
              <div className='w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0'>
                <MapPin className='w-5 h-5 text-slate-700' />
              </div>
              <div>
                <h3 className='font-medium text-slate-900 mb-1 text-sm md:text-base'>Address</h3>
                <p className='text-slate-600 text-sm md:text-base'>
                  Maxmiize Sports Group LLC
                  <br />
                  800 N King St, Suite 304-2397
                  <br />
                  Wilmington, Delaware 19801
                  <br />
                  United States
                </p>
              </div>
            </div>

            {/* Note */}
            <div className='pt-8 border-t border-gray-200'>
              <p className='text-sm md:text-base text-slate-600'>
                For inquiries about our ventures, partnerships, or general information, please reach out via email and
                our team will respond within 1-2 business days.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
