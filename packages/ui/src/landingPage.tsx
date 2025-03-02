import {
    SbBlokData,
    StoryblokServerComponent,
    storyblokEditable,
} from "@storyblok/react/rsc";

export const landingPage = ({ blok }: LandingPageProps) => {
    return (
        <main {...storyblokEditable(blok)}>
            {Array.isArray(blok.blocks) && blok.blocks?.map((blok: SbBlokData) => (
                <StoryblokServerComponent blok={blok} key={blok._uid} />
            ))}
        </main>
    );
};

interface LandingPageProps {
    blok: SbBlokData,
}
