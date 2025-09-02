import React from 'react';

interface CardProps {
    name: string;
    desc: string;
    button: React.ReactNode; // 可以传入任意类型的按钮组件
}

const HoverCard: React.FC<CardProps> = ({ name, desc, button }) => {
    return (
        <a href="#" className="group relative block bg-black">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 transform group-hover:scale-105 transition-transform duration-300"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p className="text-sm text-white">{desc}</p>
                        <div className="mt-4">
                            {button}
                        </div>
                    </div>
                </div>
            </div>

            {/* 在小屏幕上直接显示描述和按钮 */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-100 sm:hidden">
                <p className="text-sm text-white">{desc}</p>
                <div className="mt-4">
                    {button}
                </div>
            </div>
        </a>
    );
};
export default HoverCard;
