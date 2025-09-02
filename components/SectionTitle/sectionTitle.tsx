"use client";
import React from 'react';

interface SectionTitleProps {
  title: string;
  desc?: string;
  subtitle?: string;
  color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  desc,
  subtitle,
  color = 'text-gray-900'
}) => {
  return (
    <div className="text-center mb-12">
      {/* 副标题 */}
      {subtitle && (
        <p className={`text-sm font-semibold uppercase tracking-wide ${color} mb-2`}>
          {subtitle}
        </p>
      )}

      {/* 主标题 */}
      <h2 className={`text-3xl font-bold ${color} sm:text-2xl`}>
        {title}
      </h2>

      {/* 描述文字 */}
      {desc && (
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;