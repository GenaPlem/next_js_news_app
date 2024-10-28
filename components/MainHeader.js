import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <ul>
        <li>
          <p>
            <Link href="/">Home</Link>
          </p>
        </li>
        <li>
          <p>
            <Link href="/news">News</Link>
          </p>
        </li>
      </ul>
    </>
  );
}
