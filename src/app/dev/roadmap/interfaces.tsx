import React from 'react';

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  tasks: Task[];
  date?: string;
  progress?: number;
}

export interface Task {
  name: string;
  status: 'completed' | 'in-progress' | 'planned';
}
