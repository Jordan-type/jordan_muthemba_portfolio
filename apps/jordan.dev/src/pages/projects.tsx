import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'A living archive of my web3 journey—blending innovation, practicality, and impactful solutions.',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
