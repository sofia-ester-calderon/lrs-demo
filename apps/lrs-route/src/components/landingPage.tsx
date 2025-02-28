import {
    SbBlokData,
    StoryblokServerComponent,
    storyblokEditable,
} from "@storyblok/react/rsc";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const landingPage = (params: any) => {
    return (
        <main {...storyblokEditable(params.blok)}>
            {params.blok.blocks.map((blok: SbBlokData) => (
                <StoryblokServerComponent blok={blok} key={blok._uid} />
            ))}
        </main>
    );
};
