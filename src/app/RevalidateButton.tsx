"use client";

import { useRouter } from "next/navigation";
import { doRevalidate } from "./actions";

export default function RevalidateButton() {
  const router = useRouter();
  return (
    <button
      className="px-3 py-2 rounded-md bg-gray-50 text-black hover:bg-gray-300 active:bg-gray-500 transition duration-100"
      onClick={async () => {
        await doRevalidate();
        router.refresh();
      }}
    >
      Revalidate
    </button>
  );
}
