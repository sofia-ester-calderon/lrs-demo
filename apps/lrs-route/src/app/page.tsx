import Head from "next/head"
import { getStoryblokApi, ISbStoriesParams, StoryblokStory } from "@storyblok/react/rsc"

const fetchHome = async() => {
  // home is the default slug for the homepage in Storyblok
  const slug = "home";
 
  // load the draft version
  const sbParams: ISbStoriesParams = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/lrs-website/${slug}`, sbParams);
 
  return data.story
}

const Home = async() => {
  const props = await fetchHome()
  console.log(props)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1 className="text-4xl mb-10 bg-red-100">
          { props ? props.name : 'My Site' }
        </h1>
        <p className="bg-blue-100 text-3xl">TEXT</p>
      </header>
 
      <StoryblokStory story={props}/>
    </div>
  )
}

export default Home