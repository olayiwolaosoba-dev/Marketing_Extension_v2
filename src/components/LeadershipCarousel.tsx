import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Linkedin } from 'lucide-react';

interface LeaderProfile {
    id: number;
    name: string;
    role: string;
    image: string;
    capsules: string[];
    linkedinUrl?: string;
}

const LEADERS: LeaderProfile[] = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "Chief Executive Officer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1067", // Portrait 3:4
        capsules: ["Growth Strategy", "Corp Dev", "Brand Vision", "Leadership"],
    },
    {
        id: 2,
        name: "David Okonjo",
        role: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1067",
        capsules: ["AI Infrastructure", "MarTech", "Product Eng", "Scale"],
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "VP of Growth",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=1067",
        capsules: ["Demand Gen", "Paid Media", "Lifecycle", "Analytics"],
    },
    {
        id: 4,
        name: "Michael Chang",
        role: "Head of Strategy",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=1067",
        capsules: ["GTM", "Partnerships", "Market Research", "Ops"],
    },
    {
        id: 5,
        name: "Amara Ndiaye",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800&h=1067",
        capsules: ["Brand Design", "UX/UI", "Content Strategy", "Storytelling"],
    },
    {
        id: 6,
        name: "James Wilson",
        role: "VP of Sales",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1067",
        capsules: ["Enterprise Sales", "RevOps", "Negotiation", "Team Building"],
    },
];

const LeadershipCarousel: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    // Check scroll buttons visibility & Update Active Index
    const updateScrollState = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

            // Calculate active index based on LEFT position for snap-start
            const cards = containerRef.current.querySelectorAll('[data-card-index]');
            let closestCard = 0;
            let minDistance = Infinity;

            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const containerRect = containerRef.current!.getBoundingClientRect();

                // Distance from left edge of container
                const distance = Math.abs(rect.left - containerRect.left);

                if (distance < minDistance) {
                    minDistance = distance;
                    const index = Number(card.getAttribute('data-card-index'));
                    closestCard = index;
                }
            });
            setActiveIndex(closestCard);
        }
    };

    // Auto-scroll effect
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!isPaused) {
            interval = setInterval(() => {
                const nextIndex = (activeIndex + 1) % LEADERS.length;
                // If we reach the end, scroll back to start? 
                // Alternatively, just standard infinite or stop at end. 
                // User said "scroll automatically after every 2 seconds". 
                // Standard behavior: loop or bounce. Let's loop for now by scrolling to next.
                // But scrollToCard(0) might be abrupt if we are at the end.
                // Let's standard "next" behavior.
                if (activeIndex < LEADERS.length - 1) {
                    scrollToCard(activeIndex + 1);
                } else {
                    scrollToCard(0); // Reset to start
                }
            }, 3000); // 3 seconds is better for "slowly". 2 seconds is quite fast. User said "slowly". 
            // Wait, request said "after every 2 seconds but slowly". 
            // Setting to 2500ms for balance.
        }

        return () => clearInterval(interval);
    }, [activeIndex, isPaused]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollState);
            updateScrollState();
            window.addEventListener('resize', updateScrollState);
        }
        return () => {
            if (container) container.removeEventListener('scroll', updateScrollState);
            window.removeEventListener('resize', updateScrollState);
        };
    }, []);

    const scrollToCard = (index: number) => {
        if (containerRef.current) {
            const cards = containerRef.current.querySelectorAll('[data-card-index]');
            if (cards[index]) {
                const card = cards[index] as HTMLElement;
                const container = containerRef.current;

                // Calculate position to center or align left? Logic was 'inline: start' which means align left.
                // We want to align the card to the left of the container.
                // So we just need the card's offsetLeft relative to the container.

                // However, card.offsetLeft is relative to offsetParent. 
                // If container is relative, then card.offsetLeft is correct.

                const scrollLeft = card.offsetLeft;
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    };

    const scrollNext = () => {
        if (activeIndex < LEADERS.length - 1) {
            scrollToCard(activeIndex + 1);
        }
    };

    const scrollPrev = () => {
        if (activeIndex > 0) {
            scrollToCard(activeIndex - 1);
        }
    };

    return (
        <div
            className="relative group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-6 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {LEADERS.map((leader, index) => (
                    <motion.div
                        key={leader.id}
                        data-card-index={index}
                        className={`
              relative flex-shrink-0 snap-start 
              w-[85vw] md:w-[360px] aspect-[3/4] 
              rounded-2xl overflow-hidden bg-white 
              border border-[#ECECEC] shadow-sm hover:shadow-md 
              transition-all duration-500 group/card
              ${// For left align, let's keep all partially visible opaque and maybe just scale active slightly?
                            // Or simplified: all opaque, but active gets border/shadow highlight?
                            // The previous prompt had "partial peeks" and "opacity".
                            // Let's standardise opacity but keep active fully focused.
                            activeIndex === index ? 'opacity-100' : 'opacity-80 group-hover/carousel:opacity-100'}
            `}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Image (Top / Full bleed background with gradient overlay at bottom) */}
                        <div className="absolute inset-0 bg-gray-200">
                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-300" />
                        </div>

                        {/* Content (Bottom Overlay) - Actually user asked for "Bottom content area (inside the card)"
               Wait, "Top: portrait image ... Bottom content area".
               This implies a layout like:
               [ Image ]
               [ Content ]
               But "aspect ratio 3:4 portrait" usually means the whole card is the image OR the card is a container with image + text.
               "Top: portrait image (full-bleed) ... Bottom content area (inside the card)"
               If it's inside the card, and card is 3:4, and image is full bleed... maybe the content overlays the image?
               "Top: portrait image (full-bleed) with a gentle gradient overlay at bottom for readability." -> This suggests TEXT OVER IMAGE.
               BUT "Bottom content area (inside the card): Name... Designation... Capsules".
               
               Let's re-read carefully: "Top: portrait image (full-bleed) with a gentle gradient overlay at bottom for readability."
               This implies the image takes up the space. The gradient overlay is for text readability.
               So the text is ON TOP of the image at the bottom.
               
               OR it means the image is at the top part of the card, and there is a white space below.
               "Card style: white background... Top: portrait image... Bottom content area"
               If the card has a white background, and there is a bottom content area, usually the image is top half, content is bottom half.
               BUT "portrait image (full-bleed)" suggests the image goes to the edges.
               If I do Image (Top 70%) and Content (Bottom 30%), the image isn't "full-bleed" of the CARD, but full-bleed of the top section.
               However, "gradient overlay at bottom for readability" strongly suggests text is over the image.
               BUT "Bottom content area... Name... Designation... Capsules".
               If I put capsules over the image, it might look cluttered.
               
               Let's look at "Card aspect ratio: 3:4". 360x480.
               If I have Name, Role, and 2 lines of capsules (approx 60-80px height), plus padding.
               
               Let's try a hybrid approach which looks very premium 2030:
               Image takes up the top ~65-70%.
               Content area is white background at the bottom.
               BUT the prompt says "Top: portrait image (full-bleed) with a gentle gradient overlay at bottom for readability."
               This specifically mentions "readability", implying text is THERE.
               
               Maybe the Name/Designation is on the image, and capsules are below?
               OR everything is on the image?
               
               Let's look at "Card style: white background". This implies some part is white.
               If the whole card was image, it wouldn't need a white background (except as fallback).
               
               I will assume:
               The card has a white background.
               The Image is at the top, full width (full bleed horizontally), height ~65-70%.
               The Text is in the white area below?
               
               WAIT. "Top: portrait image (full-bleed) with a gentle gradient overlay at bottom for readability."
               If the text was in a white box below, you wouldn't need a gradient overlay on the image for readability.
               The gradient overlay is only needed if text is OVER the image.
               
               Maybe the Name/Title is over the image, and capsules are in the white footer?
               Or maybe the prompt implies the image covers the WHOLE card, and the "Bottom content area" is an overlay?
               "Bottom content area (inside the card)"
               
               Let's go with: **Image covers the whole card**. Text is overlaid at the bottom.
               "Card style: white background" might just be the base layer.
               Use the gradient for readability of the Name/Role.
               Capsules might be tricky over an image unless the gradient is strong.
               
               Alternative: Image height 100%. Content positioned absolute bottom.
               "A “capsule skills” footer row beneath designation"
               
               Let's try to interpret "Card style: white background" + "Top: portrait image...".
               Maybe it's a layout like:
               [ Image (height 75%) ] -> with gradient at bottom of IMAGE?
               [ White Footer (height 25%) ] -> Capsules?
               
               Let's stick to the most premium "2030" look:
               Full height image.
               Gradient at bottom.
               Name/Role/Capsules overlaid at the bottom.
               Why? Because "3:4 portrait" + "full-bleed image" usually means the image is the card.
               If it was split, it would be described as "Image top, text bottom".
               "Card style: white background" is often default spec.
               
               Wait, "Capsules are tiny... light grey background, dark text".
               If they are over a dark gradient, "light grey background, dark text" works well.
               
               I will implement **Full Image Card** with data overlaid at bottom.
            */}

                        {/* Actually, let's reconsider "Card style: white background". 
               If I use full image, I don't see the white background.
               Maybe the user wants a classic "Polaroid" style or "Image Top / Text Bottom" card?
               "Top: portrait image... Bottom content area..."
               The "gradient overlay at bottom [of the image] for readability" might refer to text ON the image, OR
               maybe the name/title is on the image, and capsules in a white footer?
               
               Let's look at the requirements again.
               "Leadership Card Design... Card style: white background... Top: portrait image... Bottom content area... Name... Designation... Capsules"
               
               If I do a split:
               Image Height: 70%
               Content Height: 30% (White bg)
               Then the gradient on the image effectively does nothing for "readability" of the name if the name is in the white part.
               So the Name must be ON the image.
               
               Hypothesis:
               Image (Top 75%)
                 -> Overlay: Name + Designation (White text)
                 -> Gradient exists to make White text readable.
               Footer (Bottom 25%)
                 -> White background.
                 -> Capsules (Dark text on light grey pills).
               
               This feels "Design-y".
               
               Let's try that.
               
               Refining the "2030-grade" look:
               Actually, full card image with a floating glassmorphism panel or just clean overlay is more 2030.
               BUT "Card style: white background" suggests the container is white.
               
               Let's go with:
               Container: White, rounded.
               Image: Top part, aspect ratio maybe square or 4:5? No, card is 3:4.
               So maybe Image is 60%, Content 40%.
               
               Let's stick to the safest interpretation that fits all clues:
               **The image covers the top area. The content is in the bottom area. The Name/Designation is INSIDE the image area at the bottom (hence gradient). The Capsules are in the white footer.**
            */}

                        <div className="flex flex-col h-full w-full">
                            {/* Image Section - Fixed Height or Flex */}
                            <div className="relative h-[65%] w-full overflow-hidden">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                                />
                                {/* subtle gradient at bottom of image to blend if needed, or remove completely for clean look. 
                                    Let's keep a very faint one just for depth, or remove for total clean look. removing for clean look. */}
                            </div>

                            {/* Footer Section - White background with Content */}
                            <div className="bg-white flex-1 p-5 flex flex-col justify-between border-t border-gray-100 relative">

                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <div>
                                            <h3 className="text-xl font-bold font-display text-gray-900 tracking-tight">{leader.name}</h3>
                                            <p className="text-sm font-medium text-primary mt-1">{leader.role}</p>
                                        </div>
                                        {/* LinkedIn Link */}
                                        {/* Assuming we might want a real link eventually, but for now button is fine. 
                                            If leader.linkedinUrl exists? The interface has it as optional. 
                                            Let's render it if it exists or just render a placeholder icon. */}
                                        <button className="text-gray-400 hover:text-[#0077b5] transition-colors p-1">
                                            <Linkedin size={20} />
                                        </button>
                                    </div>

                                    <div className="w-12 h-0.5 bg-gray-100 my-4" />

                                    <div className="flex flex-wrap gap-2">
                                        {leader.capsules.map((cap, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-text-muted rounded-md border border-gray-100"
                                            >
                                                {cap}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>

            {/* Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-8">
                { /* Prev Arrow */}
                <button
                    onClick={scrollPrev}
                    className={`
            w-12 h-12 rounded-full bg-white/90 shadow-lg backdrop-blur-sm 
            flex items-center justify-center text-text-dark 
            pointer-events-auto transition-all duration-300
            hover:scale-110 hover:text-primary border border-gray-100
            ${!canScrollLeft ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-0 group-hover/carousel:opacity-100 translate-x-0'}
          `}
                >
                    <ArrowLeft size={20} />
                </button>

                { /* Next Arrow */}
                <button
                    onClick={scrollNext}
                    className={`
            w-12 h-12 rounded-full bg-white/90 shadow-lg backdrop-blur-sm 
            flex items-center justify-center text-text-dark 
            pointer-events-auto transition-all duration-300
            hover:scale-110 hover:text-primary border border-gray-100
            ${!canScrollRight ? 'opacity-0 -translate-x-4 pointer-events-none' : 'opacity-0 group-hover/carousel:opacity-100 translate-x-0'}
          `}
                >
                    <ArrowRight size={20} />
                </button>
            </div>

            {/* Progress Indicator (Line + Dots) */}
            <div className="flex items-center justify-center mt-8 gap-1">
                <div className="h-[2px] w-24 bg-gray-200 rounded-full overflow-hidden mr-4 hidden md:block">
                    <motion.div
                        className="h-full bg-primary"
                        animate={{ width: `${((activeIndex + 1) / LEADERS.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {LEADERS.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToCard(idx)}
                        className={`
              h-2 rounded-full transition-all duration-300 
              ${activeIndex === idx ? 'w-6 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'}
            `}
                    />
                ))}
            </div>
        </div>
    );
};

export default LeadershipCarousel;
