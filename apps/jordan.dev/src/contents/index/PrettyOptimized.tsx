import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Readable & Performance-Driven."
        caption="Pretty & Optimized"
        description="Crafting clear, optimized, and maintainable code with a commitment to efficiency and scalability, while sharing knowledge to empower others in the development process."
      />
    </header>
  );
}

export default PrettyOptimized;
