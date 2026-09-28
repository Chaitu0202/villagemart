import React from 'react';
import { Star, MessageSquare, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS, STORE_INFO } from '../data/storeData';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F9F6ED] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B5A38] bg-white px-3.5 py-1 rounded-full border border-[#E8E2D2] mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#F4C400]" />
            <span>Community Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B2A] tracking-tight font-display">
            TRUSTED BY OUR CUSTOMERS
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            What our neighbours say about our service, quality groceries, and WhatsApp ordering.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-[#E8E2D2] shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F4C400] text-[#F4C400]"
                    />
                  ))}
                  <span className="text-xs font-bold text-neutral-500 ml-1.5 tabular-nums">
                    5.0
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#063B2A]">
                    {review.name}
                  </h3>
                  <p className="text-[11px] text-neutral-500">
                    {review.relation}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#0B5A38] bg-green-50 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link / Notice */}
        <div className="mt-10 text-center">
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-50 text-[#063B2A] border border-[#E8E2D2] rounded-xl text-xs font-bold transition-colors shadow-2xs"
          >
            <span>VIEW ON GOOGLE BUSINESS / MAPS</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
          </a>
          <p className="text-[11px] text-neutral-400 mt-2">
            Verified local feedback from village customers and patrons.
          </p>
        </div>

      </div>
    </section>
  );
};
