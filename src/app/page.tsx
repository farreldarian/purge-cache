import { unstable_cache } from "next/cache";
import RevalidateButton from "./RevalidateButton";
import { TAG } from "./constants";
import { Toaster } from "sonner";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-4">
        <p className="text-sm">Requested at {new Date().toISOString()}</p>
        <p className="text-2xl">
          Last revalidate: {await someCachedFunction()}
        </p>
        <RevalidateButton />
      </div>

      <Toaster />
    </main>
  );
}

async function someCachedFunction() {
  return unstable_cache(
    async () => {
      return new Date().toISOString();
    },
    [],
    {
      tags: [TAG],
    }
  )();
}
