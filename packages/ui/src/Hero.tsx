import { storyblokEditable } from "@storyblok/react/rsc";

export const Hero = (params: any) => {
  return (
    <section
    //   {...storyblokEditable(params.blok)}
      className="ui-group ui-rounded-lg ui-border "
    >
      <h1 className="ui-mb-3 ui-text-2xl ui-font-semibold">
        Hero header
        {/* {params.blok.headline} */}
      </h1>
      {/* <p className="text-center text-xl mt-8">{params.blok.content}</p> */}
      <p className="text-center text-xl mt-8">Hero text</p>
    </section>
  );
};