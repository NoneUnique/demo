import { motion } from "framer-motion";

// 在组件外部定义颜色方案和类型
const COLOR_SCHEME = [
  { bg: 'from-green-50 to-white', border: 'border-green-100' },
  { bg: 'from-blue-50 to-white', border: 'border-blue-100' },
  { bg: 'from-amber-50 to-white', border: 'border-amber-100' }
];

interface TechnologyItem {
  title: string;
  list: string[];
  desc?: any,
  data?: any
}

// 组件实现
export const TechCard = (technology :TechnologyItem) => {
  // 增强型文本分割函数
  const parseFeatureText = (text: string) => {
    const [title, ...description] = text.split(/[-–:] /);
    return {
      title: title.trim(),
      description: description.join(' ').trim()
    };
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            {technology.title}
          </h2>
          <p className="text-gray-600 md:text-lg leading-relaxed max-w-3xl mx-auto">
            {technology.desc.split('\n').map((line:any, i:number) => (
              <span key={i} className="block mt-2">{line}</span>
            ))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technology.data.map((item:any, index:number) => {
            const color = COLOR_SCHEME[index % COLOR_SCHEME.length];
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 80,
                  delay: index * 0.1
                }}
                className={`p-6 sm:p-8 rounded-2xl shadow-sm backdrop-blur-sm
                  bg-gradient-to-b ${color.bg} border ${color.border}
                  transition-all hover:shadow-md hover:border-gray-300
                  ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
                  {item.title}
                </h3>
                
                <ul className="space-y-4">
                  {item.list.map((text:any, i:number) => {
                    const { title, description } = parseFeatureText(text);
                    
                    return (
                      <li
                        key={i}
                        className="pl-4 border-l-4 border-green-500"
                      >
                        <div className="space-y-1.5">
                          <h4 className="font-medium text-gray-900">
                            {title}
                          </h4>
                          {description && (
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {description}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};