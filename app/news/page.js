import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>Fresh News every second</h1>
      <ul className="news-list">
        <li>
          <Link href="/news/concert">Concert</Link>
        </li>
        <li>
          <Link href="/news/storm">Upcoming Storm</Link>
        </li>
        <li>
          <Link href="/news/big_sales">Big Sales</Link>
        </li>
      </ul>
    </>
  );
}
