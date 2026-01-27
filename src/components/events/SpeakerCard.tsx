
import React from 'react';
import { Linkedin } from 'lucide-react';
import { Speaker } from '../../data/events';

interface SpeakerCardProps {
    speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 shrink-0">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
            </div>
            <div>
                <h4 className="font-bold text-white text-lg leading-tight group-hover:text-primary transition-colors">
                    {speaker.name}
                </h4>
                <p className="text-primary text-sm font-medium mb-1">{speaker.role}</p>
                <p className="text-white/40 text-xs uppercase tracking-wider">{speaker.company}</p>

                {speaker.linkedin && (
                    <a href={speaker.linkedin} target="_blank" rel="noreferrer" className="inline-block mt-2 text-white/20 hover:text-white transition-colors">
                        <Linkedin size={16} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default SpeakerCard;
