'use client';

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { RoadmapCard } from '@/app/dev/roadmap/RoadmapCard';
import { RoadmapItem } from '@/app/dev/roadmap/interfaces';
import GradientText from '@/components/text/gradient-text';

const roadmapData: RoadmapItem[] = [
  {
    id: '1',
    title: 'Rumors ortum! ',
    description:
      'Eheu, noster bubo! Sunt animalises amor secundus, alter liberies. Azureus, velox homos callide perdere de primus, secundus gluten.',
    status: 'completed',
    tasks: [
      { name: 'Tectum ', status: 'completed' },
      { name: 'Assimilatio ', status: 'completed' },
      { name: 'Ventuss manducare! ', status: 'completed' },
    ],
  },
  {
    id: '2',
    title: 'Cur fiscina manducare? ',
    description:
      'Eheu, frondator! Adgiums ire, tanquam fortis bromium. Sunt lunaes quaestio brevis, audax poetaes.',
    status: 'completed',
    tasks: [
      { name: 'Rationes observare! ', status: 'completed' },
      { name: 'Ratione ', status: 'completed' },
      { name: 'Boreass ire! ', status: 'completed' },
    ],
  },
  {
    id: '3',
    title: 'Absolutios cantare! ',
    description: 'Magnum, albus luras nunquam fallere de teres, lotus gallus.',
    status: 'in-progress',
    progress: 68,
    tasks: [
      { name: 'Itineris tramitems accelerare! ', status: 'completed' },
      { name: 'Cur pars observare? ', status: 'in-progress' },
      { name: 'Adelphiss crescere! ', status: 'planned' },
    ],
  },
  {
    id: '4',
    title: 'Demissios ire! ',
    description:
      'Heu, homo! Deuss sunt mineraliss de varius aonides. Demolitiones sunt eposs de peritus advena.',
    status: 'planned',
    date: 'Q3 2025',
    tasks: [
      { name: 'Lunas prarere! ', status: 'planned' },
      { name: 'Zetas congregabo! ', status: 'planned' },
      { name: 'Vasa ', status: 'planned' },
    ],
  },
  {
    id: '5',
    title: 'Cur mortem ortum? ',
    description:
      'Nunquam resuscitabo nutrix. Grandis, audax scutums hic contactus de flavum, alter abaculus.',
    status: 'planned',
    date: 'Q4 2025',
    tasks: [
      { name: 'Racanas cantare! ', status: 'planned' },
      { name: 'Ignigenas resistere! ', status: 'planned' },
      { name: 'Tumultumques credere! ', status: 'planned' },
    ],
  },
];

export default function Roadmap() {
  return (
    <>
      <Header></Header>
      <div className="min-h-screen text-gray-300">
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
                index={index}
                status_before={roadmapData[index - 1]?.status}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
