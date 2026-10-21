import { headers } from "next/headers";
import { Suspense } from "react";

// Error: cache: "no-store" in the second argument, with a Request as the first one.
async function Data() {
  await headers();
  const response = await fetch(new Request("https://api.vercel.app/blog"), { cache: "no-store" });
  return <p>{(await response.json()).length} posts</p>;
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <Data />
    </Suspense>
  );
}
