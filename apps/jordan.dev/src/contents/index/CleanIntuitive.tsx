import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';
import ProjectCardIndex from '@/contents/index/Cards/ProjectCardIndex'

import type { ProjectCardState } from '@/contents/index/Cards/ProjectCardIndex';

// TodoItemState

type Content = {
  state: ProjectCardState;
  shows: Array<ProjectCardState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'smartContract',
    shows: ['smartContract'],
    title: 'Smart Contract Architecture',
    description: 'Crafting efficient, secure, and scalable blockchain-based contracts for transparency and trust.',
  },
  {
    state: 'uxIntegration',
    shows: ['uxIntegration'],
    title: 'Seamless UX/UI Integration',
    description: 'Designing interfaces that blend aesthetics with usability, ensuring accessibility and intuitive user journeys.',
  },
  {
    state: 'scalableSolutions',
    shows: ['scalableSolutions'],
    title: 'Scalable Solutions',
    description: 'Developing systems that grow with user needs, from event platforms to decentralized civic tools.',
  },
  {
    state: 'communityInnovation',
    shows: ['communityInnovation'],
    title: 'Community-Driven Innovation',
    description: 'Building with and for the community, fostering collaboration to solve real-world challenges.',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Building Scalable, Decentralized, and User-Centric Solutions."
          caption="Innovative & Impactful"
          description="Empowering communities with intuitive designs and practical Web3 applications without compromising functionality."
        />
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
                <ProjectCardIndex
                  state={
                    currentState
                      ? currentState.shows
                      : ['smartContract', 'uxIntegration', 'scalableSolutions', 'communityInnovation']
                  }
                />
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
                <ProjectCardIndex
                  state={
                    currentState
                      ? currentState.shows
                      : ['smartContract', 'uxIntegration', 'scalableSolutions', 'communityInnovation']
                  }
                  title={currentState?.title || 'Smart Contract Architecture'}
                  description={
                    currentState?.description ||
                    'Crafting efficient, secure, and scalable blockchain-based contracts for transparency and trust.'
                  }
                  date="Available Now"
                  tag1="Blockchain"
                  tag2="Innovation"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
