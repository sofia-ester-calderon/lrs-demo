import { storyblokEditable } from "@storyblok/react/rsc";

export const HeaderText = ({ blok }: HeaderTextProps) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="ui-group ui-rounded-lg ui-border "
    >
      <h1 className="ui-mb-3 ui-text-2xl ui-font-semibold">
        {blok.headline}
      </h1>
      <p className="text-center text-xl mt-8">{blok.content}</p>
    </section>
  );
};

interface HeaderTextProps {
  blok: {
    headline: string,
    content: string,
  }
}

