import { headers } from "next/headers";
import { Suspense } from "react";

// No error: a Request with no cache option.
async function Data() {
  await headers();
  const response = await fetch(new Request("https://api.vercel.app/blog"));
  return <p>{(await response.json()).length} posts</p>;
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <Data />
    </Suspense>
  );
}
