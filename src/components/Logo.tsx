import React from "react";

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-9", isLight = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Visual Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F2547] to-[#18386b] shadow-sm text-white shrink-0 overflow-hidden border border-white/10">
        {/* Globe / Open page geometric curves */}
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          {/* Yellow spark / sun of knowledge */}
          <circle cx="27" cy="9" r="3.5" fill="#F5B800" />
          
          {/* Modern dynamic ribbons for language connection */}
          <path
            d="M8 26C11 19 16 13 25 12"
            stroke="#E1251B"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M9 29C15 26 21 24 28 24"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />
          <path
            d="M8 17C12 17 18 19 22 25"
            stroke="#F5B800"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center tracking-tight">
          <span
            className={`text-2xl font-black font-sans tracking-wider ${
              isLight ? "text-white" : "text-[#0F2547]"
            }`}
          >
            GEA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E1251B] ml-0.5 mb-1" />
        </div>
        <span
          className={`text-[10px] uppercase font-bold tracking-[0.22em] ${
            isLight ? "text-gea-yellow" : "text-[#E1251B]"
          }`}
        >
          Idiomas
        </span>
      </div>
    </div>
  );
};
