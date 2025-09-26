"use client";

import React from "react";
import { ChevronDown, Mail, Bell } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="bg-[#16111C] border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between gap-[30px]">
        <div className="flex items-center space-x-4 ml-auto">
          <button className="bg-blue-600 gap-2 font-bold hover:bg-blue-700 text-white min-w-[240px] px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200">
            <Image
              src="/icons/call_icon.svg"
              alt="Call"
              width={20}
              height={20}
            />
            <span>Book a Call</span>
          </button>

          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg cursor-pointer transition-colors duration-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="inherit"
                className="hover:fill-[#5B7fff] fill-white  transition-colors duration-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 0.999756H5C3.67441 1.00134 2.40356 1.52864 1.46622 2.46598C0.528882 3.40331 0.00158786 4.67416 0 5.99976L0 17.9998C0.00158786 19.3254 0.528882 20.5962 1.46622 21.5335C2.40356 22.4709 3.67441 22.9982 5 22.9998H19C20.3256 22.9982 21.5964 22.4709 22.5338 21.5335C23.4711 20.5962 23.9984 19.3254 24 17.9998V5.99976C23.9984 4.67416 23.4711 3.40331 22.5338 2.46598C21.5964 1.52864 20.3256 1.00134 19 0.999756ZM5 2.99976H19C19.5988 3.00093 20.1835 3.18127 20.679 3.51756C21.1744 3.85385 21.5579 4.3307 21.78 4.88676L14.122 12.5458C13.5584 13.1071 12.7954 13.4222 12 13.4222C11.2046 13.4222 10.4416 13.1071 9.878 12.5458L2.22 4.88676C2.44215 4.3307 2.82561 3.85385 3.32105 3.51756C3.81648 3.18127 4.40121 3.00093 5 2.99976ZM19 20.9998H5C4.20435 20.9998 3.44129 20.6837 2.87868 20.1211C2.31607 19.5585 2 18.7954 2 17.9998V7.49976L8.464 13.9598C9.40263 14.896 10.6743 15.4218 12 15.4218C13.3257 15.4218 14.5974 14.896 15.536 13.9598L22 7.49976V17.9998C22 18.7954 21.6839 19.5585 21.1213 20.1211C20.5587 20.6837 19.7956 20.9998 19 20.9998Z"
                  fill="inherit"
                />
              </svg>
            </div>
            <div className="p-2  rounded-lg cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="hover:fill-[#5B7fff] fill-white transition-colors duration-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7_6731)">
                  <path
                    d="M22.5549 13.6619L20.6549 6.82593C20.098 4.82327 18.8876 3.06422 17.2162 1.8284C15.5448 0.592587 13.5083 -0.049079 11.4304 0.00540109C9.35241 0.0598812 7.3523 0.807381 5.74795 2.12908C4.14361 3.45078 3.02709 5.27084 2.57589 7.29993L1.10489 13.9149C0.942406 14.6459 0.946162 15.404 1.11588 16.1333C1.2856 16.8625 1.61695 17.5444 2.08547 18.1285C2.55399 18.7126 3.14771 19.184 3.8228 19.5079C4.49789 19.8318 5.23711 20 5.98589 19.9999H7.09989C7.32941 21.1302 7.94262 22.1464 8.83563 22.8763C9.72864 23.6062 10.8465 24.0049 11.9999 24.0049C13.1532 24.0049 14.2711 23.6062 15.1641 22.8763C16.0572 22.1464 16.6704 21.1302 16.8999 19.9999H17.7379C18.5087 20 19.2691 19.8218 19.9596 19.4794C20.6502 19.1369 21.2522 18.6394 21.7187 18.0258C22.1852 17.4122 22.5035 16.699 22.6487 15.942C22.7939 15.185 22.7622 14.4046 22.5559 13.6619H22.5549ZM11.9999 21.9999C11.3816 21.9974 10.7793 21.8039 10.2752 21.4458C9.77112 21.0878 9.38997 20.5828 9.18389 19.9999H14.8159C14.6098 20.5828 14.2287 21.0878 13.7246 21.4458C13.2205 21.8039 12.6182 21.9974 11.9999 21.9999ZM20.1259 16.8149C19.8472 17.1846 19.4862 17.4842 19.0715 17.6899C18.6568 17.8956 18.1998 18.0018 17.7369 17.9999H5.98589C5.53667 17.9999 5.09321 17.8989 4.68823 17.7045C4.28325 17.5101 3.9271 17.2273 3.64605 16.8768C3.36501 16.5264 3.16625 16.1173 3.06445 15.6798C2.96265 15.2423 2.96041 14.7874 3.05789 14.3489L4.52789 7.73293C4.88224 6.13914 5.7592 4.70954 7.01935 3.67138C8.2795 2.63323 9.85051 2.04611 11.4827 2.00335C13.1148 1.96059 14.7144 2.46465 16.0272 3.4354C17.34 4.40616 18.2906 5.78788 18.7279 7.36093L20.6279 14.1969C20.7534 14.6423 20.7734 15.1108 20.6863 15.5653C20.5991 16.0197 20.4073 16.4476 20.1259 16.8149Z"
                    fill="inherit"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_6731">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex group items-center space-x-2 cursor-pointerrounded-lg p-2 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              <Image
                src="/icons/user_avatar.svg"
                alt="User"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <p className="text-sm transition-colors duration-200 font-bold text-white group-hover:text-[#5B7FFF]">
                  Martin Sinclair
                </p>
                <p className="text-xs transition-colors duration-200  text-[#ADB3C0] group-hover:text-[#F0F7FF]">
                  Senior
                </p>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
