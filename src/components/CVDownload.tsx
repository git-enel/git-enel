"use client";

import { useEffect, useRef, useState } from "react";
import { DownloadIcon, Languages } from "lucide-react";

export default function DownloadCV() {
  const [showOptions, setShowOptions] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const cvLinks = {
    indonesia:
      "https://drive.google.com/uc?export=download&id=18n0T7CMSN7jsCbWrXPqOUX6I79rGecaR",
    english:
      "https://drive.google.com/uc?export=download&id=14st14TLWfd3LKwIO3TK3buCIyTs0ceya",
  };

  const handleDownload = (lang: "indonesia" | "english") => {
    const url = cvLinks[lang];
    if (url) window.open(url, "_blank");
    setShowOptions(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isFar = window.scrollY > 100;
      setIsScrolled(isFar);

      if (isFar) {
        setShowModal(false);
      } else {
        if (!showOptions) setShowModal(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showOptions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showOptions]);

  const toggleOptions = () => {
    if (!showOptions) {
      setShowModal(false);
    } else {
      if (window.scrollY <= 100) setShowModal(true);
    }
    setShowOptions((prev) => !prev);
  };

  return (
    <>
      {showModal && (
        <div className="fixed bottom-24 right-8 z-40 bg-[#13131a]/90 text-white px-3 py-2 rounded-xl border border-gray-700 shadow-lg animate-fade-in">
          💼 <span className="font-semibold ml-1">Download my CV here!</span>
        </div>
      )}

      <div
        ref={ref}
        className={`fixed right-8 z-50 flex flex-col items-end transition-all duration-500 ease-in-out ${
          isScrolled ? "bottom-24" : "bottom-6"
        }`}
      >
        {showOptions && (
          <div className="mb-3 flex flex-col bg-[#13131a] border border-gray-700 rounded-xl shadow-lg overflow-hidden animate-fade-in">
            <button
              onClick={() => handleDownload("indonesia")}
              className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-[#1f1f2e] transition-colors text-left"
            >
              <Languages className="w-5 h-5" /> Bahasa Indonesia
            </button>
            <div className="h-px bg-gray-700 mx-2" />
            <button
              onClick={() => handleDownload("english")}
              className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-[#1f1f2e] transition-colors text-left"
            >
              <Languages className="w-5 h-5" /> English
            </button>
          </div>
        )}

        <button
          onClick={toggleOptions}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#f3564b] text-black shadow-[0_0_25px_rgba(0,217,255,0.5)] 
                     flex items-center justify-center hover:scale-110 hover:shadow-[0_0_35px_rgba(0,217,255,0.7)] transition-all duration-300"
          aria-label="Download CV"
        >
          <DownloadIcon className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
