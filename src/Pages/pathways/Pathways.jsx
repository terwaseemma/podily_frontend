import React from 'react'
import './Pathways.css'
import Header from '../../components/d_header/Header'
import pathway1 from '../../assets/pathway1.png'
import pathway2 from '../../assets/pathway2.png'
import pathway3 from '../../assets/pathway3.png'
import pathway4 from '../../assets/pathway4.png'
import pathway5 from '../../assets/pathway5.png'
import { IoDiamond } from "react-icons/io5";


const Pathways = () => {

  const pathways = [
    {
      id: 1,
      title: "Workplace Presentations",
      description: "With a focus on Clarity, conciseness, confidence, and engaging storytelling",
      image: pathway1,
      rating: 10
    },
    {
      id: 2,
      title: "Social Scenarios",
      description: "With a focus on Energy, humor, storytelling, and audience engagement",
      image: pathway2,
      rating: 10
    },
    {
      id: 3,
      title: "Educational Presentations",
      description: "With a focus on Clarity, structure, engaging explanations, and audience interaction",
      image: pathway3,
      rating: 9
    },
    {
      id: 4,
      title: "Sales and Marketing Presentations",
      description: "Focus on Persuasiveness, clarity, confidence, and closing techniques",
      image: pathway4,
      rating: 8
    },
    {
      id: 5,
      title: "Other Public Speaking Scenarios",
      description: "Rhetoric, stage presence, vocal variety, and persuasive arguments",
      image: pathway5,
      rating: 10
    },
  ]
  return (
    <div className='ds'>
      <Header value="pathways"/>
      <section className='pathways'>
        <div className='pathway-list'>
          {pathways.map((pathway) => (
            <div className='pathway' key={pathway.id}>
              <img src={pathway.image} alt={pathway.title} />
              <div className='flex-row-space pathway-info'>
                <div className="flex-column2">
                <h2>{pathway.title}</h2>
                <p>{pathway.description}</p>
                </div>
                <div className='flex-row rating'>
                  <div className="iconn">
                  <IoDiamond />
                  </div>
                  
                  <span>{pathway.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Pathways