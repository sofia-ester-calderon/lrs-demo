import Head from "next/head"
import { getStoryblokApi, ISbStoriesParams, StoryblokStory } from "@storyblok/react/rsc"

const fetchHome = async() => {
  const slug = "home";
 
  // load the draft version
  const sbParams: ISbStoriesParams = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/lrs-website/${slug}`, 
    sbParams,     
    {
    cache: 'no-store',
    next: {
      revalidate: 3600,
    },
  });
 
  return data.story
}

const Home = async() => {
  const story = await fetchHome()
  return (
    <div>
      <Head>
        <title>LRS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1 className="text-3xl">
          Landing page
        </h1>
      </header>
 
      <StoryblokStory story={story}/>
    </div>
  )
}

export default Home