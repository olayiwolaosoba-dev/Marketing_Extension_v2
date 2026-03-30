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
];

const TrustStrip: React.FC = () => {
    return (
        <div className="bg-bg-dark border-t border-white/5 py-8 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10 mb-6 text-center">
                <span className="inline-block relative text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                    <span className="relative z-10 bg-bg-dark px-4">Proof, not promises</span>
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-0"></div>
                </span>
            </div>

            <div className="flex overflow-hidden group mask-gradient-horizontal">
                <div className="flex items-center space-x-16 animate-infinite-scroll whitespace-nowrap group-hover:paused">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            {logos.map((logo, index) => (
                                <img
                                    key={`${i}-${index}`}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-7 w-auto object-contain opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500 mx-4 select-none"
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex items-center space-x-16 animate-infinite-scroll whitespace-nowrap group-hover:paused ml-16" aria-hidden="true">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            {logos.map((logo, index) => (
                                <img
                                    key={`${i}-${index}`}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-7 w-auto object-contain opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500 mx-4 select-none"
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default TrustStrip;
