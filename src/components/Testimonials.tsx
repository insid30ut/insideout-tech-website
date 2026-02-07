export default function Testimonials() {
  const testimonials = [
    {
      quote: "Insideout Technologies saved my business from a major network failure. Their response time was incredible, and they explained everything clearly.",
      author: "Sarah J.",
      role: "Small Business Owner"
    },
    {
      quote: "I love that they come to your house! It was so convenient to get my laptop fixed without having to unplug everything and drive to a shop.",
      author: "Robert M.",
      role: "Residential Customer"
    },
    {
      quote: "Professional, knowledgeable, and fair pricing. The camera system they installed gives us great peace of mind.",
      author: "David L.",
      role: "Homeowner"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
              {/* Quote Icon */}
              <div className="text-blue-200 absolute top-6 left-6 -z-10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              
              <p className="text-gray-700 mb-6 italic relative z-10">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">{t.author}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
