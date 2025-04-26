import React from 'react';

const Advice = () => {
  const adviceCards = [
    {
      image: '/images/meeting.webp',
      title: 'Expert Consultation',
      description: 'Get professional advice from certified medical experts to manage your fracture effectively.'
    },
    {
      image: '/images/analysis.jpeg',
      title: 'Treatment Plans',
      description: 'Access tailored treatment plans based on your specific condition for optimal recovery.'
    },
    {
      image: '/images/analysis1.webp',
      title: 'Fracture Analysis',
      description: 'Understand the severity of your fracture with our detailed analysis and insights.'
    }
  ];

  return (
    <section 
      id="advice-section"
      className="bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center py-16 px-5 shadow-lg shadow-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-yellow-400 mb-4 font-bold">
          Expert Medical Advice
        </h2>
        <p className="text-xl text-slate-300 leading-relaxed mb-12">
          "Our platform offers expert guidance on bone health and fracture management with personalized recommendations tailored to your needs."
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-7xl mx-auto">
        {adviceCards.map((card, index) => (
          <div
            key={index}
            className="bg-slate-800 border-2 border-yellow-400 rounded-xl p-6 w-full max-w-xs md:w-80 text-center 
                       shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-3 hover:shadow-yellow-400/30"
            data-aos={index === 0 ? 'fade-right' : index === 1 ? 'fade-up' : 'fade-left'}
            data-aos-duration="1200"
          >
            <img 
              src={card.image} 
              alt={card.title}
              className="w-36 h-36 mx-auto mb-6 object-cover transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-2xl text-yellow-400 mb-3 font-semibold">
              {card.title}
            </h3>
            <p className="text-slate-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advice;