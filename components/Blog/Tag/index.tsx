import Link from "next/link";

const TagBadges = ({ tag }: { tag?: string }) => {
  const tagData: string | undefined = tag;
  const tagStr: string = typeof tagData === "string" ? tagData : "";
  const tagArr: string[] = tagStr
    .split(",")
    .map((i) => i.trim())
    .filter((i) => i)
    .sort() as string[];

  return (
    <div>
      {tagArr.map((tagName) => {
        return (
          <Link
            href={{
              pathname: "/blog",
              query: {
                tag: tagName.toLowerCase(),
              },
            }}
            className="border-2 mr-2 p-1 text-xs rounded-lg"
            key={tagName}
          >
            {tagName}
          </Link>
        );
      })}
    </div>
  );
};

export default TagBadges;
