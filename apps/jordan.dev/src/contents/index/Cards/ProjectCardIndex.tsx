import clsx from 'clsx';

import { CalendarIcon } from '@/components/Icons';

export type ProjectCardState = 'smartContract' | 'uxIntegration' | 'scalableSolutions' | 'communityInnovation';

interface ProjectCardProps {
  state: Array<ProjectCardState>;
  title?: string;
  description?: string;
  date?: string;
  tag1?: string;
  tag2?: string;
}

function ProjectCardIndex({
  state,
  title = 'Smart Contract Architecture',
  description = 'Crafting efficient, secure, and scalable blockchain-based contracts for transparency and trust.',
  date = 'Available Now',
  tag1 = 'Blockchain',
  tag2 = 'Innovation',
}: ProjectCardProps) {
  return (
    <div
      className={clsx('pointer-events-none w-full select-none border p-6', 'lg:w-96',
        state.includes('smartContract') && ['rounded-xl'],
        state.includes('uxIntegration') && [''],
        state.includes('scalableSolutions') && ['text-sm'],
        state.includes('communityInnovation')
          ? ['border-divider-light bg-white']
          : ['border-black bg-white', 'dark:border-white dark:bg-[#050914]']
      )}
      role="presentation"
    >
      <div
        className={clsx(
          'flex items-center',
          state.includes('uxIntegration') && ['mb-4 justify-between']
        )}
      >
        <div className={clsx('flex')}>
          <div
            className={clsx(
              'relative flex h-8 w-8 items-center justify-center',
              state.includes('smartContract') && ['rounded-full'],
              state.includes('scalableSolutions') && ['font-bold'],
              state.includes('communityInnovation')
                ? ['border-white bg-sky-400 text-white']
                : ['border-white bg-[#050914] text-white']
            )}
          >
            {title[0]}
          </div>
        </div>
        <div
          className={clsx(
            state.includes('smartContract') && ['rounded-full'],
            state.includes('uxIntegration') && ['px-2 py-0.5'],
            state.includes('scalableSolutions') && ['text-xs font-bold'],
            state.includes('communityInnovation')
              ? ['bg-red-100 text-red-800']
              : ['bg-[#ff0000] text-white']
          )}
        >
          High
        </div>
      </div>
      <div
        className={clsx(
          state.includes('uxIntegration') && ['mb-1'],
          state.includes('scalableSolutions') && ['text-lg font-bold'],
          state.includes('communityInnovation')
            ? ['text-slate-700']
            : ['text-black', 'dark:text-white']
        )}
      >
        {title}
      </div>
      <div
        className={clsx(
          state.includes('uxIntegration') && ['mb-4'],
          state.includes('communityInnovation')
            ? ['text-slate-600']
            : ['text-black', 'dark:text-white']
        )}
      >
        {description}
      </div>
      <div
        className={clsx(
          'flex',
          state.includes('uxIntegration') && ['mb-6 gap-2'],
          state.includes('scalableSolutions') && ['text-xs font-bold']
        )}
      >
        <div
          className={clsx(
            state.includes('smartContract') && ['rounded-full'],
            state.includes('uxIntegration') && ['px-2 py-0.5'],
            state.includes('communityInnovation')
              ? ['bg-blue-100 text-blue-700']
              : ['bg-[#0000ff] text-white']
          )}
        >
          {tag1}
        </div>
        <div
          className={clsx(
            state.includes('smartContract') && ['rounded-full'],
            state.includes('uxIntegration') && ['px-2 py-0.5'],
            state.includes('communityInnovation')
              ? ['bg-yellow-100 text-yellow-700']
              : ['bg-[#ffff00] text-black']
          )}
        >
          {tag2}
        </div>
      </div>
      <div
        className={clsx(
          'flex items-center',
          state.includes('uxIntegration') && ['gap-1 '],
          state.includes('scalableSolutions') && ['text-xs font-medium']
        )}
      >
        <CalendarIcon
          className={clsx(
            'h-4 w-4',
            state.includes('uxIntegration') && ['-mt-1'],
            state.includes('communityInnovation')
              ? ['text-slate-400']
              : ['h-4 w-4 text-black']
          )}
        />
        <div
          className={clsx(
            state.includes('uxIntegration') && [''],
            state.includes('communityInnovation')
              ? ['text-slate-600']
              : ['text-black', 'dark:text-white']
          )}
        >
          {date}
        </div>
      </div>
    </div>
  );
}

export default ProjectCardIndex;
