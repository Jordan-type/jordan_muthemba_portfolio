import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Detail-Oriented Excellence."
        caption="Detail Oriented"
        description="A sharp focus on every small detail, ensuring accessibility, interface consistency, and an intuitive user experience."
      />
    </header>
  );
}

export default DetailOriented;
