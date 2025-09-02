"use client";
import React from 'react';

interface ProductDetailProps {
  title: string;
  imageUrl: string;
  parameters: { [key: string]: string };
  description: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ title, imageUrl, parameters, description }) => {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      {/* 左侧图片 */}
      <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/2">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
      </div>

      {/* 右侧内容 */}
      <div className="md:w-1/2 md:pl-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">产品参数:</h3>
          <ul className="list-disc pl-5">
            {Object.entries(parameters).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">产品描述:</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
