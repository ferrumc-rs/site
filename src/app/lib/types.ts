import React from "react";

export type Blog = {
  title: string;
  description: string;
  date: string;
  published: boolean;
  pinned: boolean;
  markdown_path: string;
}

export type GitHubRelease = {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  html_url: string;
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

export type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  icon: React.ElementType;
  tags: string[];
  position: { x: number; y: number };
}