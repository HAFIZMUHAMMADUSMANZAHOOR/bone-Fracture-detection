import React from 'react'

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
  ]

  return (
    <section id="advice-section">
      <div className="advice-content">
        <h2>Expert Medical Advice</h2>
        <p>
          "Our platform offers expert guidance on bone health and fracture management with personalized recommendations tailored to your needs."
        </p>
      </div>

      <div className="advice-cards">
        {adviceCards.map((card, index) => (
          <div
            key={index}
            className="advice-card"
            data-aos={index === 0 ? 'fade-right' : index === 1 ? 'fade-up' : 'fade-left'}
            data-aos-duration="1200"
          >
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Advice
