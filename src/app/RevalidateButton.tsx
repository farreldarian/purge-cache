"use client";

import { useRouter } from "next/navigation";
import { doRevalidate } from "./actions";
import { toast } from "sonner";

export default function RevalidateButton() {
  const router = useRouter();
  return (
    <button
      className="px-3 py-2 rounded-md bg-gray-50 text-black hover:bg-gray-300 active:bg-gray-500 transition duration-100"
      onClick={async () => {
        const promise = doRevalidate();
        toast.promise(promise, {
          loading: "Revalidating...",
          success: "Revalidated!",
          error: "Failed to revalidate",
        });
        await promise;
        router.refresh();
      }}
    >
      Revalidate
    </button>
  );
}
