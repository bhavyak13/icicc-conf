import React, { useState } from 'react';
import './home.css';


const PrevKeynote = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const speakersData = {
    "2024": [
      { desc: "Prof. Bal Virdee, London Metropolitan University, UK", image: "/speaker-images/bal.jpg" },
      { desc: "Prof. Vivek Bohara, IIIT, Delhi", image: "/speaker-images/vivek.jpg" },
      { desc: "Prof Anu G Agarwal, University of Delhi", image: "/speaker-images/anu.jpg" },
      { desc: "Dr. Shriram Kris Vasudevan, Intel Corporation", image: "/speaker-images/shriram.jpg" },
      { desc: "Dr. Jagdish Chand Bansal, South Asian University, New Delhi", image: "/speaker-images/jagdish.jpg" }
    ],
    "2023": [
      { desc: "Prof. David Camacho, Universidad Politécnica de Madrid, Spain", image: "/speaker-images/david.jpg" },
      { desc: "Bijaya Ketan Panigrahi - Professor in the Electrical Engineering Department, IIT Delhi, India", image: "/speaker-images/bijaya.png" },
      { desc: "Aninda Bose, Senior Editor, Springer", image: "/speaker-images/aninda.jpg" }
    ],
    "2022": [
      { desc: "Dr. Vinay Thakur, COO, NeGD, MeitY and ADG, BISAG-N, MeitY", image: "/speaker-images/vinay.jpg" },
      { desc: "Prof. Michalis Matthaiou, Queen's University Belfast, UK", image: "/speaker-images/michalis.jpg" },
      { desc: "Prof. Stefano Berretti, University of Florence, Italy", image: "/speaker-images/stefano.jpg" },
      { desc: "Prof Anu G Agarwal, University of Delhi", image: "/speaker-images/anu.jpg" }
    ],
    "2021": [
      { desc: "Prof. Oscar Castillo, Tijuana Institute of Technology, Mexico", image: "/speaker-images/oscar.jpg" },
      { desc: "Aninda Bose, Senior Editor, Springer", image: "/speaker-images/aninda.jpg" },
      { desc: "Prof. Mohammad Obaidat, University of Sharjah, UAE", image: "/speaker-images/mohamaad.jpg" },
      { desc: "Dr. Om Pal, Scientist C (R&D), MeitY", image: "/speaker-images/om.jpg" },
      { desc: "Dr. Seyedali Mirjalili, Torrens University, Australia", image: "/speaker-images/seye.jpg" },
      { desc: "Dr. Budhachandra Khundrakpam, Research Associate, McGill University, Canada", image: "/speaker-images/buda.jpg" },
      { desc: "Dr. Ahmad Zobaa, Reader in Electrical & Power Engineering, Brunel University London, UK", image: "/speaker-images/ahmad.jpg" }
    ],
    "2020": [
      { desc: "Prof Anu G Agarwal, University of Delhi", image: "/speaker-images/anu.jpg" },
      { desc: "Dr. Swagatam Das, Indian Statistical Institute, Kolkata", image: "/speaker-images/swagatam.jpg" },
      { desc: "Dr. Zdzislaw Polkowski, Jan Wyzykowski University, Polkowice, Poland", image: "/speaker-images/polko.jpg" },
      { desc: "Prof. (Dr.) Aparna Mehra, IIT Delhi", image: "/speaker-images/aparna.jpg" },
      { desc: "Dr. Neeraj Kumar, Thapar Institute of Engineering & Technology", image: "/speaker-images/neeraj.jpg" }
    ],
    "2019": [
      { desc: "Prof. Vaclav Snasel, VSB - Technical University of Ostrava", image: "/speaker-images/vaclav.jpg" }
    ],
    "2018": [
      { desc: "Siddhartha Bhattacharya, VSB Technical University of Ostrava, Czech Republic", image: "/speaker-images/siddharta.jpg" },
      { desc: "Nilanjan Dey, Associate Professor, Techno International New Town, Kolkata", image: "/speaker-images/nilanjan.jpg" },
      { desc: "Prof. Awadesh Kumar Singh, NIT Kurukshetra, India", image: "/speaker-images/awadesh.jpg" }
    ]
  };
  

  return (
    <div className="keynote-speakers">
      {/* Tabs for Year Selection */}
      <div className="tabs">
      
        {Object.keys(speakersData).reverse().map(year => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`tab-button ${selectedYear === year ? 'active' : ''}`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Cards for Speakers */}
      <div className="cards">
        {speakersData[selectedYear].map((speaker, index) => (
          <div key={index} className="card">
            <img src={speaker.image} alt={speaker.desc} className="card-image" />
            <p className="card-desc">{speaker.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrevKeynote;
