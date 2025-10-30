'use client';

import { Lightbulb, Volume2, Camera, Wrench } from 'lucide-react';

const skills = [
  {
    icon: Wrench,
    title: 'Scenic Design',
    description: 'Stage design, set construction, spatial planning, and creative problem-solving for theatrical productions.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Professional lighting setup, programming, and control for theatrical atmospheres and dramatic effects.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Volume2,
    title: 'Audio Engineering',
    description: 'Sound design, audio mixing, equipment setup, and acoustic management for performances.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional theatrical photography, backstage documentation, and visual storytelling.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

export default function SkillsSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.map((skill, index) => (
        <div
          key={skill.title}
          className="group bg-white rounded-xl p-8 stage-shadow hover:-translate-y-2 transition-all duration-300"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div
            className={`${skill.bgColor} ${skill.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
          >
            <skill.icon size={32} />
          </div>
          <h3 className="text-xl font-semibold text-primary-900 mb-3">
            {skill.title}
          </h3>
          <p className="text-primary-600 leading-relaxed">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  );
}
