"use server";

import { revalidateTag } from "next/cache";
import { TAG } from "./constants";

export async function doRevalidate() {
  revalidateTag(TAG);
}
