"use client";

import { useState } from "react";

interface Link {
  label: string;
  url: string;
}

interface ProjectItemProps {
  title: string;
  links?: Link[];
  description: string;
  preview?: string;
  expandable?: boolean;
}

export const ProjectItem = ({
  title,
  links,
  description,
  preview,
  expandable = false,
}: ProjectItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = expandable && !isExpanded && preview ? preview : description;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-semibold text-white/80">{title}</h3>
        {links?.map((link, index) => (
          <span key={link.label}>
            {index > 0 && <span className="text-white text-sm"> / </span>}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline text-sm transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
      <div>
        <p className="text-white/70 leading-relaxed">{displayText}</p>
        {expandable && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white/70 underline text-sm mt-2 hover:opacity-60 transition-opacity"
          >
            {isExpanded ? "read less" : "read more"}
          </button>
        )}
      </div>
    </div>
  );
};
