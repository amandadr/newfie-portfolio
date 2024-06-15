"use client";
import React from "react";

export const FooterSignature: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-white text-md font-semibold text-center bg-[rgba(50,50,50,0.45)] rounded-[10px] px-[3%]">
      © {currentYear} Amanda Roy
    </div>
  );
};

export default FooterSignature;
