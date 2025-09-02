// ImageStepList.tsx
"use client";
interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  { id: 1, title: '项目立项', description: '需求分析与可行性研究' },
  { id: 2, title: '概念设计', description: '风格定位与方案提案' },
  { id: 3, title: '技术深化', description: '施工图纸与材料选型' },
  { id: 4, title: '施工准备', description: '场地规划与资源调配' },
  { id: 5, title: '主体建造', description: '结构施工与质量控制' },
  { id: 6, title: '竣工验收', description: '质量检测与交付使用' },
];

export default function StepList() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* 主容器 */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          {/* 左侧图片区域 */}
          <div className="lg:w-1/2 relative group">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/demo/construction.jpg"
                alt="建筑流程示意图"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-100/30 to-emerald-100/30 rounded-3xl -z-10 transform rotate-2 group-hover:rotate-1 transition-all" />
          </div>

          {/* 右侧步骤列表 */}
          <div className="lg:w-1/2 flex flex-col justify-center">
          

            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="group relative pl-14 pr-6 py-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* 装饰元素 */}
                  <div className="absolute left-5 top-1/2 -translate-y-1/2">
                    {/* 渐变序号背景 */}
                    <div className="absolute w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-400 rounded-xl opacity-20 transform -rotate-12" />
                    
                    {/* 序号 */}
                    <span className="relative text-2xl font-bold text-blue-600">
                      {String(step.id).padStart(2, '0')}
                    </span>
                  </div>

                  {/* 内容 */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    {/* <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p> */}
                  </div>

                  {/* 悬浮装饰线 */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}