import React from 'react';
import { RoadmapItem } from '@/app/dev/roadmap/interfaces';
import { StatusBadge, TaskItem } from '@/app/dev/roadmap/extras';

export function RoadmapCard({
  item,
  index,
  status_before,
}: {
  item: RoadmapItem;
  index: number;
  status_before?: string;
}) {
  const isInProgress = item.status === 'in-progress';

  return (
    <div className="relative pl-12 pb-16 group">
      {/* Card */}
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          {(status_before !== item.status && <StatusBadge status={item.status} />) || (
            <StatusBadge status={null} />
          )}
          {item.date && <span className="text-xs text-gray-500 font-mono">{item.date}</span>}
          {isInProgress && item.progress !== undefined && (
            <span className="text-xs text-orange-400 font-mono">{item.progress}%</span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">{item.description}</p>

        {/* Tasks */}
        {isInProgress && item.tasks.length > 0 && (
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 mb-4">
            <div className="space-y-3">
              {item.tasks.map((task, idx) => (
                <TaskItem key={idx} task={task} />
              ))}
            </div>
          </div>
        )}

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

        {/* Progress bar for in-progress items */}
        {isInProgress && item.progress !== undefined && (
          <div className="mt-4">
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
