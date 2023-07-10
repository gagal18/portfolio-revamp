import React, {ReactNode, useEffect, useRef} from "react";
import {gsap} from "gsap";

interface HeroItemProps {
    header: string;
    children?: ReactNode;
}

const HeroItem: React.FC<HeroItemProps> = ({ header,  children}) => {
    const scaleRef = useRef<HTMLDivElement>(null);
    const handleMouseOver = () => {
        gsap.to(scaleRef.current, { scale: 1.1,  duration: 0.3 });
    };
    const handleMouseLeave = () => {
        gsap.to(scaleRef.current, { scale: 1,  duration: 0.3 });
    };    return (
        <div ref={scaleRef} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className="shadow-left shadow-[#f0f0f04d] rounded-r-lg p-[20px] flex flex-col justify-between min-h-[250px]  min-w-[550px] bg-black last:mb-[200px]">
            <div className="text-white text-[24px]">{header}</div>
            <div className="text-white">{children}</div>
        </div>
    )
}

export default HeroItem
