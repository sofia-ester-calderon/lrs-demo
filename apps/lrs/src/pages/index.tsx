import Head from "next/head"
// import styles from "../styles/Home.module.css"
 
import { getStoryblokApi, ISbStoriesParams, ISbStoryData } from "@storyblok/react/rsc"
 
export default function Home(props: StryblokProps) {
  console.log(props)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1>
          { props.story ? props.story.name : 'My Site' }
        </h1>
      </header>
 
      <main>
        
      </main>
    </div>
  )
}
 
export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  const slug = "home";
 
  // load the draft version
  const sbParams: ISbStoriesParams = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/lrs-website/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : {},
      // key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export interface StryblokProps {
  story: ISbStoryData,
  // key: string,
}