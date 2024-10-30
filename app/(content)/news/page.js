import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = getAllNews();

  return (
    <>
      <h1>Fresh News every second</h1>
      <NewsList news={news} />
    </>
  );
}
