'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GoCpu } from 'react-icons/go';
import { FaCube } from 'react-icons/fa';
import { HiCodeBracket } from 'react-icons/hi2';
import { HiServer } from 'react-icons/hi';
import { MdRocketLaunch } from 'react-icons/md';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {RoadmapItem} from "@/app/lib/types";

const roadmapData: RoadmapItem[] = [
  {
    id: '1',
    title: 'Protocol Foundation',
    description: 'Implement Minecraft protocol in Rust with zero-copy parsing',
    status: 'completed',
    icon: GoCpu,
    tags: ['Networking', 'Protocol', 'Rust'],
    position: { x: 10, y: 15 },
  },
  {
    id: '2',
    title: 'World Engine Core',
    description: 'Build chunk management with async generation pipeline',
    status: 'completed',
    icon: FaCube,
    tags: ['World', 'Performance', 'Async'],
    position: { x: 35, y: 25 },
  },
  {
    id: '3',
    title: 'Survival Features',
    description: 'Implementing the core survival features like chat, commands, and item usage',
    status: 'in-progress',
    icon: HiCodeBracket,
    tags: ['Movements', 'Chat', 'Item usage'],
    position: { x: 65, y: 35 },
  },
  {
    id: '4',
    title: 'Terrain Generation',
    description: 'Fast and Optimized Terrain Generation with Multi-Threading and Chunk Caching',
    status: 'in-progress',
    icon: HiServer,
    tags: ['Chunks', 'Vanilla-like', 'Optimization'],
    position: { x: 85, y: 50 },
  },
  {
    id: '5',
    title: 'Entities',
    description: 'Entity AIs, Player Interaction, and Entity Movement',
    status: 'planned',
    icon: MdRocketLaunch,
    tags: ['AI', 'Lively World', 'DevOps'],
    position: { x: 50, y: 85 },
  },
];

const statusColors = {
  completed: 'from-green-400 to-emerald-500',
  'in-progress': 'from-orange-400 to-amber-500',
  planned: 'from-gray-500 to-gray-600',
};

export default function Roadmap() {
  const pathD = useMemo(() => {
    const points = roadmapData.map((item) => item.position);
    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];

      // Calculate control points for smooth curves
      const cp1x = prev.x + (curr.x - prev.x) * 0.4;
      const cp1y = prev.y + (curr.y - prev.y) * 0.1;
      const cp2x = curr.x - (curr.x - prev.x) * 0.4;
      const cp2y = curr.y - (curr.y - prev.y) * 0.1;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }

    return d;
  }, []);

  return (
    <>
      <Header></Header>
      <div className="flex flex-col gap-5">
        <div className="overflow-hidden min-h-screen">
          <div className="relative max-w-7xl mx-auto p-4 sm:p-8">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 overflow-hidden opacity-10 pointer-events-none">
              <div
                className="
              absolute inset-0
              bg-[linear-gradient(orange_1px,transparent_1px),linear-gradient(90deg,orange_1px,transparent_1px)]
              bg-[length:50px_50px]
              [transform:perspective(500px)_rotateX(45deg)]
            "
              />
            </div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8 sm:mb-16"
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  FerrumC
                </span>
                <span className="block text-xl sm:text-2xl font-light text-gray-400 mt-2">
                  Development Journey
                </span>
              </h1>
              <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto px-4">
                Following the winding path of building the next-generation Minecraft server software
              </p>
            </motion.div>

            {/* Curved Timeline Container */}
            <div className="relative w-full mx-auto" style={{ paddingBottom: '100%' }}>
              <div className="absolute inset-0">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fb923c" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="0.5"
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />

                  {/* Draw circles at each point */}
                  {roadmapData.map((item, index) => (
                    <motion.circle
                      key={`circle-${item.id}`}
                      cx={item.position.x}
                      cy={item.position.y}
                      r="1.0"
                      fill="#f59e0b"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                    />
                  ))}
                </svg>

                {/* Cards positioned at exact SVG coordinates */}
                {roadmapData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="absolute"
                    style={{
                      left: `${item.position.x}%`,
                      top: `${item.position.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.5, type: 'spring', stiffness: 200 }}
                  >
                    {/* Card */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`relative bg-gray-950 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 transition-all duration-300 w-40 sm:w-56 ${item.status === 'completed' ? 'border-green-500/60 shadow-green-500/20' : item.status === 'in-progress' ? 'border-orange-500/60 shadow-orange-500/20' : 'border-gray-600/60 shadow-gray-500/20'} shadow-lg hover:shadow-xl`}
                    >
                      {/* Status Badge */}
                      <div
                        className={`absolute -top-2 -right-2 px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold bg-gradient-to-r ${statusColors[item.status]} text-white shadow-lg`}
                      >
                        {item.status === 'in-progress' ? 'IN PROGRESS' : item.status.toUpperCase()}
                      </div>

                      {/* Icon */}
                      <div className="p-1.5 sm:p-2 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg mb-2 sm:mb-3 inline-block">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-sm font-bold text-white mb-2 leading-tight">
                        {item.title}
                      </h3>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-700/50 text-orange-400 text-xs rounded border border-orange-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Glow Pulse */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(251,146,60,0.3)',
                          '0 0 40px rgba(251,146,60,0.6)',
                          '0 0 20px rgba(251,146,60,0.3)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-lg sm:rounded-xl pointer-events-none"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
