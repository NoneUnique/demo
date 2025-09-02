import { Link } from "@heroui/link";

const ModalsDetail = () => {

  // 示例数据 (实际应从API获取)
  const product = {
    id: 'vch01',
    title: 'VCH01 ',
    price: '￥6,800,000',
    type: 'CUSTOM HOME',
    specs: [
      { label: 'label', value: 'value' },
      { label: 'label', value: 'value' },
      { label: 'label', value: '4间' },
      { label: 'label', value: 'value' },
      { label: 'label', value: 'value' },
      { label: 'label', value: 'value' },
    ],
    images: [
      '/images/detail-1.jpg',
      '/images/detail-2.jpg',
      '/images/detail-3.jpg',
    ],
    description: `
      这座现代风格的定制别墅融合了当代设计与自然元素，采用高品质环保材料建造。开放式布局最大化自然采光，一层包含客厅、餐厅、厨房及老人套房，二层设有三间卧室和多功能休闲区。大面积落地窗设计将庭院景观引入室内，屋顶太阳能板系统实现部分能源自给，智能家居系统提升居住体验。
    `,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按钮 */}
        <Link href="/" className="inline-flex items-center mb-6 text-emerald-700 hover:text-emerald-900">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          back
        </Link>

        {/* 主体内容 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* 图片与基本信息区块 */}
          <div className="flex flex-col lg:flex-row gap-8 p-6 border-b border-gray-200">
            {/* 左侧图片区 */}
            <div className="lg:w-1/2">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                {/* <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={800}
                  height={600}
                  className="object-cover"
                /> */}
              </div>
              
              {/* 缩略图列表 */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {product.images.map((img, index) => (
                  <div key={index} className="aspect-w-4 aspect-h-3 cursor-pointer">
                    {/* <Image
                      src={img}
                      alt={`${product.title} - 图${index + 1}`}
                      width={300}
                      height={200}
                      className="object-cover rounded-md hover:opacity-80 transition-opacity"
                    /> */}
                  </div>
                ))}
              </div>
            </div>

            {/* 右侧信息区 */}
            <div className="lg:w-1/2">
              <div className="sticky top-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
                <div className="text-2xl font-bold text-emerald-700 mb-6">{product.price}</div>
                
                {/* 规格列表 */}
                <div className="space-y-4 mb-8">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="text-gray-900 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* 行动按钮 */}
                <button className="w-full bg-emerald-700 text-white py-3 rounded-lg hover:bg-emerald-800 transition-colors">
                  Contact us
                </button>
              </div>
            </div>
          </div>

          {/* 详细描述区块 */}
          <div className="p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">description</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalsDetail;