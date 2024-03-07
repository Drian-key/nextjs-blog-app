import { MoveRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-16">
      <div className="italic flex items-end gap-2">
        <h1 className="text-5xl font-bold">Best of the week</h1>
        <Link href="/blogs" className="flex gap-2">
          <span className="font-medium mb-0.5">See all posts</span>
          <MoveRight width={15} className="mt-[0.5px]" />
        </Link>
      </div>
    </main>
  );
}
