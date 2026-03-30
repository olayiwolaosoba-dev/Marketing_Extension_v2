import React from 'react';

import zoneImg from '../../assets/clients/zone.jpeg';
import quidaxImg from '../../assets/clients/quidax.png';
import smartcomplyImg from '../../assets/clients/smartcomply.png';
import verypayImg from '../../assets/clients/verypay.webp';
import adhereImg from '../../assets/clients/adhere.png';
import andelaImg from '../../assets/clients/andela.png';
import seequreImg from '../../assets/clients/seequre.png';
import elev8Img from '../../assets/clients/elev8.png';
import tekExpertsImg from '../../assets/clients/tek-experts.png';
import lmdImg from '../../assets/clients/lmd.jpeg';
import bigibitImg from '../../assets/clients/bigibet.png';
import googleImg from '../../assets/clients/google.png';
import intelImg from '../../assets/clients/intel.png';
import youtubeImg from '../../assets/clients/youtube.png';
import occulusImg from '../../assets/clients/oculus.png';
import livingsoulsImg from '../../assets/clients/living-souls.jpeg';

const logos = [
  { src: zoneImg, alt: 'Zone' },
  { src: quidaxImg, alt: 'Quidax' },
  { src: smartcomplyImg, alt: 'Smartcomply' },
  { src: verypayImg, alt: 'VeryPay' },
  { src: adhereImg, alt: 'Adhere' },
  { src: andelaImg, alt: 'Andela' },
  { src: seequreImg, alt: 'Seequre' },
  { src: elev8Img, alt: 'Elev8' },
  { src: tekExpertsImg, alt: 'Tek Experts' },
  { src: lmdImg, alt: 'LMD' },
  { src: bigibitImg, alt: 'BigiBet' },
  { src: googleImg, alt: 'Google' },
  { src: intelImg, alt: 'Intel' },
  { src: youtubeImg, alt: 'YouTube' },
  { src: occulusImg, alt: 'Oculus' },
  { src: livingsoulsImg, alt: 'Living Souls School' },
];

const BrandsCarouselMTS: React.FC = () => {
    return (
        <div className="py-12 bg-bg-dark border-t border-white/10 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Powering stack for top brands</p>
            </div>
            <div className="flex items-center gap-12 animate-scroll whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-500">
                {[...logos, ...logos].map((logo, i) => (
                    <img
                        key={i}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 w-auto object-contain grayscale px-4 select-none shrink-0"
                    />
                ))}
            </div>
        </div>
    );
};

export default BrandsCarouselMTS;
