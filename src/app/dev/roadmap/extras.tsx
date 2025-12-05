import { FaCheck, FaRegCircle } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';
import { Task } from '@/app/lib/types';

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
      className: 'bg-forged/10 text-forged border-forged/30',
    },
    'in-progress': {
      label: 'CURRENT FOCUS',
      className: 'bg-molten/10 text-molten border-molten/30',
    },
    planned: {
      label: 'PLANNED',
      className: 'bg-void/50 text-muted border-gray-800/30',
    },
    none: {
      label: '',
      className: 'invisible border border-transparent',
    },
  };

  const key = status ?? 'none';

  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded border font-code ${config[key].className}`}
    >
      {config[key].label}
    </span>
  );
}

export function TaskItem({ task }: { task: Task }) {
  const Icon =
    task.status === 'completed' ? FaCheck : task.status === 'in-progress' ? FiLoader : FaRegCircle;
  const iconColor =
    task.status === 'completed'
      ? 'text-forged'
      : task.status === 'in-progress'
        ? 'text-molten'
        : 'text-muted';

  return (
    <div className="flex items-center gap-3 text-muted font-body">
      <Icon className={`w-4 h-4 ${iconColor} flex-shrink-0`} />
      <span className={task.status === 'in-progress' ? 'text-main' : 'text-muted'}>
        {task.name}
      </span>
    </div>
  );
}
