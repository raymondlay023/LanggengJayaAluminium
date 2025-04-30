import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    aosDelay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, aosDelay }) => {
    return (
        <div data-aos="fade-up" data-aos-delay={aosDelay} className="group dark:text-white">
            <div className="overflow-hidden">
                <img src={image} alt={title} className="mx-auto h-[420px] w-full object-cover duration-300 group-hover:scale-105" />
                <div className="ml-6 -translate-y-16 space-y-2 bg-white p-4 dark:bg-slate-950">
                    <h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>
                    <p className="line-clamp-4 text-sm text-gray-500">{description}</p>
                    <div className="flex justify-end pr-4 text-gray-500">
                        <FaArrowRight className="group-hover:text-primary duration-300 group-hover:translate-x-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
