import FormNewPost from "@/components/form-new-post";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  return (
    <main className="max-w-4xl mx-auto my-4">
      <FormNewPost />
    </main>
  );
}
