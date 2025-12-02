'use client';

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { RoadmapCard } from '@/app/dev/roadmap/RoadmapCard';
import GradientText from '@/components/text/gradient-text';
import { RoadmapItem } from '@/app/lib/types';

const SITE_URL = 'https://ferrumc.com';

const roadmapData: RoadmapItem[] = [
  {
    id: '1',
    title: 'Core Foundation',
    description:
      'The backbone of the server: startup systems, configuration, the main game loop that processes 20 ticks per second, multi-threaded networking to handle thousands of players, and the scheduler that keeps everything running smoothly.',
    status: 'in-progress',
    progress: 88,
    tasks: [
      { name: 'Server startup & command-line options', status: 'completed' },
      { name: 'Advanced logging system', status: 'completed' },
      { name: 'Game loop (20 ticks per second)', status: 'completed' },
      { name: 'Catch-up logic for server lag', status: 'completed' },
      { name: 'Multi-threaded networking', status: 'completed' },
      { name: 'Parallel chunk loading', status: 'completed' },
      { name: 'Task scheduler', status: 'completed' },
      { name: 'Advanced tick splitting', status: 'in-progress' },
      { name: 'EULA acceptance prompt', status: 'planned' },
      { name: 'Crash detection & recovery', status: 'planned' },
    ],
  },
  {
    id: '2',
    title: 'Player Connections',
    description:
      'Everything needed for players to connect: server list ping (MOTD & player count), login authentication with Mojang, encryption for security, data compression to reduce bandwidth, and the protocol that lets players interact with the world.',
    status: 'in-progress',
    progress: 82,
    tasks: [
      { name: 'Server list ping (MOTD)', status: 'completed' },
      { name: 'Player login system', status: 'completed' },
      { name: 'Mojang account authentication', status: 'completed' },
      { name: 'Connection encryption', status: 'completed' },
      { name: 'Network compression', status: 'completed' },
      { name: 'Game protocol (basic)', status: 'completed' },
      { name: 'LAN server discovery', status: 'in-progress' },
      { name: 'In-game packets (movement, chat, etc.)', status: 'in-progress' },
      { name: 'Server query protocol', status: 'planned' },
      { name: 'RCON (remote console)', status: 'planned' },
      { name: 'Advanced game packets (combat, enchanting)', status: 'planned' },
    ],
  },
  {
    id: '3',
    title: 'World & Terrain',
    description:
      'The Minecraft world itself: loading existing worlds, generating new terrain with biomes, caves and structures, the lighting system that makes everything look right, and block interactions like placing and breaking.',
    status: 'in-progress',
    progress: 54,
    tasks: [
      { name: 'World loading from disk', status: 'completed' },
      { name: 'Chunk system (16×384×16)', status: 'completed' },
      { name: 'Block registry (all block types)', status: 'completed' },
      { name: 'Block states & properties', status: 'completed' },
      { name: 'Height maps', status: 'completed' },
      { name: 'Basic terrain generation', status: 'in-progress' },
      { name: 'Biome system (Plains works)', status: 'in-progress' },
      { name: 'Lighting system (imported)', status: 'in-progress' },
      { name: 'World settings & time', status: 'planned' },
      { name: 'Player data saving', status: 'planned' },
      { name: 'Advanced terrain generation', status: 'planned' },
      { name: 'Multiple biomes', status: 'planned' },
      { name: 'Cave generation', status: 'planned' },
      { name: 'Trees, ores, and lakes', status: 'planned' },
      { name: 'Villages & structures', status: 'planned' },
      { name: 'Dynamic lighting updates', status: 'planned' },
      { name: 'Block physics & updates', status: 'planned' },
    ],
  },
  {
    id: '4',
    title: 'Players & Entities',
    description:
      'Everything that moves in the game: player physics and movement, health and damage, hunger and experience, mobs with AI, and all entity types from items on the ground to vehicles.',
    status: 'in-progress',
    progress: 38,
    tasks: [
      { name: 'Player entity system', status: 'completed' },
      { name: 'Player position & rotation', status: 'completed' },
      { name: 'All 4 game modes', status: 'completed' },
      { name: 'Player abilities (flying, etc.)', status: 'completed' },
      { name: 'Health system', status: 'completed' },
      { name: 'Basic collision detection', status: 'in-progress' },
      { name: 'Hunger & saturation', status: 'in-progress' },
      { name: 'Experience & levels', status: 'in-progress' },
      { name: 'Basic mobs (pigs work!)', status: 'in-progress' },
      { name: 'Gravity & physics', status: 'planned' },
      { name: 'Swimming & water physics', status: 'planned' },
      { name: 'Full collision system', status: 'planned' },
      { name: 'Hunger depletion', status: 'planned' },
      { name: 'Statistics tracking', status: 'planned' },
      { name: 'Achievements & advancements', status: 'planned' },
      { name: 'Mob AI (pathfinding)', status: 'planned' },
      { name: 'All mob types', status: 'planned' },
      { name: 'Arrows & projectiles', status: 'planned' },
      { name: 'Minecarts & boats', status: 'planned' },
      { name: 'Item entities (drops)', status: 'planned' },
    ],
  },
  {
    id: '5',
    title: 'Gameplay & Survival',
    description:
      'The core Minecraft experience: inventory management, crafting recipes, breaking and placing blocks with proper tools, combat with weapons and armor, redstone circuits, water and lava flow, and status effects.',
    status: 'in-progress',
    progress: 28,
    tasks: [
      { name: 'Inventory system', status: 'completed' },
      { name: 'Breaking blocks (creative)', status: 'completed' },
      { name: 'Placing blocks', status: 'completed' },
      { name: 'Item properties', status: 'in-progress' },
      { name: 'Container synchronization', status: 'in-progress' },
      { name: 'Status effects (structure)', status: 'in-progress' },
      { name: 'Chests & storage', status: 'planned' },
      { name: 'Furnaces & smelting', status: 'planned' },
      { name: 'Crafting table recipes', status: 'planned' },
      { name: 'Recipe book', status: 'planned' },
      { name: 'Tool durability & efficiency', status: 'planned' },
      { name: 'Mining speed by tool', status: 'planned' },
      { name: 'Using items (eating, bows)', status: 'planned' },
      { name: 'Redstone circuits', status: 'planned' },
      { name: 'Water & lava flow', status: 'planned' },
      { name: 'Combat system', status: 'planned' },
      { name: 'Armor & protection', status: 'planned' },
      { name: 'Enchantments', status: 'planned' },
      { name: 'Potions & brewing', status: 'planned' },
      { name: 'Status effect mechanics', status: 'planned' },
    ],
  },
  {
    id: '6',
    title: 'Advanced Features',
    description:
      'The complete Minecraft experience: custom data packs, scoreboard & teams, working chest and furnace blocks, villager trading, raids and patrols, explosions, maps, particles, sounds, and anti-cheat protection.',
    status: 'planned',
    date: 'Future',
    progress: 0,
    tasks: [
      { name: 'Custom data packs', status: 'planned' },
      { name: 'Custom functions & commands', status: 'planned' },
      { name: 'Loot tables', status: 'planned' },
      { name: 'Scoreboard system', status: 'planned' },
      { name: 'Teams & PvP modes', status: 'planned' },
      { name: 'Chests & storage blocks', status: 'planned' },
      { name: 'Furnaces & brewing stands', status: 'planned' },
      { name: 'Villager trading', status: 'planned' },
      { name: 'Villager AI & gossiping', status: 'planned' },
      { name: 'Raids & pillagers', status: 'planned' },
      { name: 'Patrols', status: 'planned' },
      { name: 'Explosions (TNT, creepers)', status: 'planned' },
      { name: 'Maps & cartography', status: 'planned' },
      { name: 'Boss bars', status: 'planned' },
      { name: 'Particle effects', status: 'planned' },
      { name: 'Sound system', status: 'planned' },
      { name: 'Anti-cheat (movement)', status: 'planned' },
      { name: 'Spam & chat filtering', status: 'planned' },
    ],
  },
];

export default function Roadmap() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'FerrumC Development Roadmap',
    description: 'Development timeline and feature roadmap for FerrumC',
    url: `${SITE_URL}/dev/roadmap`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header></Header>
      <div className="text-gray-300">
        {/* Background grid */}
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">The Path to</span>
              <br />
              <GradientText>Performance</GradientText>
              <span className="text-white">.</span>
            </h1>
            <p className="text-gray-500 text-lg mt-6">Multithreaded. Memory safe. Blazing fast.</p>
            <p className="text-gray-600 text-sm">
              Tracking the development of the next-gen Minecraft server.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[6px] top-2.5 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-orange-500 to-gray-700" />

            {/* Roadmap items */}
            {roadmapData.map((item, index) => (
              <RoadmapCard
                key={item.id}
                item={item}
                status_before={roadmapData[index - 1]?.status}
                open_default={index === 0 && true}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
