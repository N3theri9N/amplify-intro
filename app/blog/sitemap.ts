import { BASE_DOMAIN } from "@/constants";
import { MetadataRoute } from "next";
import { SORTED_ALL_POST } from "./allPosts";

export async function generateSitemaps() {
  return SORTED_ALL_POST.map((post) => ({
    id: post._raw.flattenedPath,
  }));
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_DOMAIN}/blog/${id}`,
      lastModified: new Date(),
    },
  ];
}
