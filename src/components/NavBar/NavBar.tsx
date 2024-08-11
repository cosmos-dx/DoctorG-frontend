import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import Image from "next/image";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function NavBar() {
  return (
    <div className="relative" >
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://github.com/cosmos-dx" target="_blank" rel="noopener noreferrer">
            <Image src="/github.png" width={50} height={50} alt="GitHub" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://leetcode.com/u/abhishekgupta0118/" target="_blank" rel="noopener noreferrer">
            <Image src="/code.png" width={50} height={50} alt="Code" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://www.linkedin.com/in/abhishek-gupta-a1a44a203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" width={50} height={50} alt="LinkedIn" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://instagram.com/abhishek.gupta0118" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.png" width={50} height={50} alt="Instagram" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://x.com/cosmos_dx?t=we3AjPyQPRB8NYeyDVLm7A&s=09" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter.png" width={50} height={50} alt="Twitter" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://abhishekgupta-cosmos.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/portfolio.png" width={50} height={50} alt="Portfolio" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://play.google.com/store/apps/details?id=com.allone.planner_app&hl=en_IN" target="_blank" rel="noopener noreferrer">
            <Image src="/playstore.png" width={50} height={50} alt="Play Store" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="mailto:abhishekgupta0118@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src="/gmail.png" width={50} height={50} alt="Gmail" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://www.youtube.com/channel/UCAbYO_aZMt7cQc4BzmlnANA" target="_blank" rel="noopener noreferrer">
            <Image src="/youtube.png" width={50} height={50} alt="YouTube" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://www.udemy.com/certificate/UC-65149e0e-be72-473f-921e-d28d65c319c0/" target="_blank" rel="noopener noreferrer">
            <Image src="/award.png" width={50} height={50} alt="Award" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://www.coursera.org/account/accomplishments/verify/LNG7L7X5ZDPV" target="_blank" rel="noopener noreferrer">
            <Image src="/award.png" width={50} height={50} alt="Award" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}

