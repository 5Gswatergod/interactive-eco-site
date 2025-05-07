import React, { useRef } from 'react'

const GlowCardNoCh = ({ card, index }) => {
    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        angle = (angle + 360) % 360;

        card.style.setProperty('--start', angle + 60)
    }

  return (
    <div className="mobile-glow-edge">
      <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl p-10'>
          <div className='glow' />
          <div className='mb-3'>
            <h3 className='text-white text-xl font-bold mb-1'>{card.title}</h3>
            <p className='text-white/70 text-sm'>{card.description}</p>
          </div>
      </div>
    </div>
  )
}

export default GlowCardNoCh