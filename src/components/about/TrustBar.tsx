import React from 'react';

import zoneImg from '../../assets/clients/zone.jpeg';
import quidaxImg from '../../assets/clients/quidax.png';
import smartcomplyImg from '../../assets/clients/smartcomply.png';
import verypayImg from '../../assets/clients/verypay.webp';
import andelaImg from '../../assets/clients/andela.png';
import seequreImg from '../../assets/clients/seequre.png';
import adhereImg from '../../assets/clients/adhere.png';
import elev8Img from '../../assets/clients/elev8.png';

const logos = [
  { src: zoneImg, alt: 'Zone' },
  { src: quidaxImg, alt: 'Quidax' },
  { src: smartcomplyImg, alt: 'Smartcomply' },
  { src: verypayImg, alt: 'VeryPay' },
  { src: andelaImg, alt: 'Andela' },
  { src: seequreImg, alt: 'Seequre' },
  { src: adhereImg, alt: 'Adhere' },
  { src: elev8Img, alt: 'Elev8' },
];

const TrustBar: React.FC = () => {
    return (
        <section className="bg-bg-dark pb-32">
            <div className="container mx-auto px-6 max-w-7xl border-t border-white/10 pt-16">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="shrink-0 text-center md:text-left">
                        <h3 className="text-white font-bold text-lg">Trusted by ambitious teams</h3>
                        <p className="text-white/40 text-sm">Fintech, Infrastructure, Venture, Growth</p>
                    </div>

                    <div className="flex-1 w-full overflow-hidden relative mask-gradient-horizontal">
                        <div className="flex items-center justify-between gap-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            {logos.map((logo, i) => (
                                <img
                                    key={i}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-7 w-auto object-contain shrink-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
