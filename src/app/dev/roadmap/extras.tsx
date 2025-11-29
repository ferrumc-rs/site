import { FaCheck, FaRegCircle } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';
import { Task } from '@/app/dev/roadmap/interfaces';

export function StatusBadge({
  status,
}: {
  status: 'completed' | 'in-progress' | 'planned' | null;
}) {
  const config: Record<
    'completed' | 'in-progress' | 'planned' | 'none',
    { label: string; className: string }
  > = {
    completed: {
      label: 'COMPLETED',
      className: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
    'in-progress': {
      label: 'CURRENT FOCUS',
      className: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    },
    planned: {
      label: 'PLANNED',
      className: 'bg-gray-500/10 text-gray-400 border-gray-500/30',
    },
    none: {
      label: '',
      className: 'invisible border border-transparent',
    },
  };

  const key = status ?? 'none';

  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded border ${config[key].className}`}>
      {config[key].label}
    </span>
  );
}

export function TaskItem({ task }: { task: Task }) {
  const Icon =
    task.status === 'completed' ? FaCheck : task.status === 'in-progress' ? FiLoader : FaRegCircle;
  const iconColor =
    task.status === 'completed'
      ? 'text-emerald-400'
      : task.status === 'in-progress'
        ? 'text-orange-400'
        : 'text-gray-600';

  return (
    <div className="flex items-center gap-3 text-gray-400">
      <Icon className={`w-4 h-4 ${iconColor} flex-shrink-0`} />
      <span className="text-sm">{task.name}</span>
    </div>
  );
}
