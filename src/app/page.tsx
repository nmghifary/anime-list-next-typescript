import HeaderAnime from "@/components/AnimeList/HeaderAnime";
import GridList from "@/components/AnimeList/GridList";
import SliderList from "@/components/AnimeList/SliderList";
import {
  getApiResponse,
  getNestedApiResponse,
  getRandomDataSlice,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getApiResponse("top/anime", "limit=8");
  const topManga = await getApiResponse("top/manga", "limit=10");
  let recommendedAnime = await getNestedApiResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = getRandomDataSlice(recommendedAnime, 4);

  return (
    <>
      <section>
        <HeaderAnime title="Top Manga" linkHref="/top/manga" />
        <SliderList api={topManga} />
      </section>
      <section>
        <HeaderAnime title="Top Anime" linkHref="/top/anime" />
        <GridList api={topAnime} />
      </section>
      <section>
        <HeaderAnime title="Recommendations Anime" />
        <GridList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
