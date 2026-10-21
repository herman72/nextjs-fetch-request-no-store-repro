import { headers } from "next/headers";
import { Suspense } from "react";

// No error: a URL, and cache: "no-store" in the second argument.
async function Data() {
  await headers();
  const response = await fetch("https://api.vercel.app/blog", { cache: "no-store" });
  return <p>{(await response.json()).length} posts</p>;
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <Data />
    </Suspense>
  );
}
