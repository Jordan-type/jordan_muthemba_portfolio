import { getSortedPosts } from '@/lib/posts';

import BlogContents from '@/contents/blog';
import HeaderImage from '@/contents/blog/HeaderImage';
import Page from '@/contents-layouts/Page';

import type { BlogContentsProps } from '@/contents/blog';
import type { GetStaticProps } from 'next';

type BlogProps = {
  posts: BlogContentsProps['posts'];
};

function Blog({ posts }: BlogProps) {
  return (
    <Page
      frontMatter={{
        title: 'Personal Blog',
        description: 'Exploring the intersections of web development, tech innovations, and personal growth—stories that inspire, educate, and connect.'
      }}
      headerImage={<HeaderImage />}
    >
      <BlogContents posts={posts} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const allPostsData = getSortedPosts();

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Blog;
