import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  return (
    <>
      <h1>Fresh News every second</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
