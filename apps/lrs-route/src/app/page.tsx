import Head from "next/head"
import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc"

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
        <h1>
          { props ? props.name : 'My Site' }
        </h1>
      </header>
 
      <main>
        
      </main>
    </div>
  )
}

export default Home