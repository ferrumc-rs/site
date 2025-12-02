'use client';

import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { StatusBadge, TaskItem } from '@/app/dev/roadmap/extras';

// Mock types for demo
interface Task {
  name: string;
  status: 'completed' | 'in-progress' | 'planned';
}

interface RoadmapItem {
  status: 'completed' | 'in-progress' | 'planned';
  date?: string;
  title: string;
  description: string;
  tasks: Task[];
  progress?: number;
}

export function RoadmapCard({
  item,
  status_before,
  open_default = false,
}: {
  item: RoadmapItem;
  status_before?: string;
  open_default?: boolean;
}) {
  const isInProgress = item.status === 'in-progress';
  const [open, setOpen] = useState(open_default);

  return (
    <div className="relative pl-12 pb-3 group">
      {/* Timeline dot */}
      <div
        className={`absolute left-[2px] w-3 h-3 rounded-full ring-4 ring-neutral-900 transition-all ${
          item.status === 'completed'
            ? 'bg-emerald-500'
            : item.status === 'in-progress'
              ? 'bg-orange-500'
              : 'bg-gray-600'
        }`}
      />

      {/* Card Container */}
      <div className="relative bg-neutral-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-gray-600/70 transition-all duration-300">
        {/* Header Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full text-left p-6 relative cursor-pointer focus:outline-none"
        >
          {/* Status and Meta Info */}
          <div className="flex items-center justify-between">
            {status_before !== item.status && (
              <span className="pb-2">
                <StatusBadge status={item.status} />
              </span>
            )}
          </div>

          {/* Title */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
            <div
              className="flex-shrink-0 mt-1.5 text-gray-400 transition-transform duration-200"
              style={{ transform: open ? 'rotate(0deg)' : 'rotate(0deg)' }}
            >
              {open ? <IoIosArrowUp className="w-5 h-5" /> : <IoIosArrowDown className="w-5 h-5" />}
            </div>
          </div>
        </button>

        {/* Expandable Content */}
        {open && (
          <div className="px-6 pb-6 border-t border-gray-700/30 pt-6">
            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">{item.description}</p>

            {/* Progress Bar for In-Progress Items */}
            {isInProgress && item.progress !== undefined && (
              <div className="mb-6 flex flex-row items-center justify-between gap-4">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden grow">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <span className="text-xs text-orange-400 font-mono mx-4">{item.progress}%</span>
              </div>
            )}

            {/* Tasks - In Progress View */}
            {isInProgress && item.tasks.length > 0 && (
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <div className="space-y-3">
                  {item.tasks.map((task, idx) => (
                    <TaskItem key={idx} task={task} />
                  ))}
                </div>
              </div>
            )}

            {/* Tasks - Compact Tag View */}
            {!isInProgress && item.tasks.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.tasks.map((task, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 border border-gray-700"
                  >
                    {task.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
