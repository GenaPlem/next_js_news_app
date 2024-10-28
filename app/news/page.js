import Link from "next/link";
import MainHeader from "@/components/MainHeader";

export default function News() {
  return (
    <>
      <MainHeader />
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
