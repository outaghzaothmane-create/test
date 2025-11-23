import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-12 lg:p-16 text-center border border-gray-100">
          <svg className="w-12 h-12 text-gray-300 mx-auto mb-8" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          
          <blockquote className="text-2xl lg:text-3xl text-gray-900 mb-8 leading-relaxed font-medium">
            "We use Sanity to power a lot of content across our public website, including the docs and changelog. 
            It works well from an engineering perspective: using the same source for both our public website 
            and in-app updates means we maintain content consistency without duplicating work."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#0090FF] to-[#6E56CF] rounded-full flex items-center justify-center text-white font-bold text-xl">
              PC
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-lg">Paco Coursey</p>
              <p className="text-sm text-gray-600">Webmaster @ Linear</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

