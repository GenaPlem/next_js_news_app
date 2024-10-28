import Link from "next/link";

export default function News() {
  return (
    <>
      <h1>Fresh News every second</h1>
      <ul>
        <li>
          <p>
            <Link href="/news/concert">Concert</Link>
          </p>
        </li>
        <li>
          <p>
            <Link href="/news/storm">Upcoming Storm</Link>
          </p>
        </li>
        <li>
          <p>
            <Link href="/news/big_sales">Big Sales</Link>
          </p>
        </li>
      </ul>
    </>
  );
}
