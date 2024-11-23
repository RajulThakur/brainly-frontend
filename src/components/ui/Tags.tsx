interface TagsProps {
  tags: string[];
  light?: boolean;
}

export default function Tags({ tags, light }: TagsProps) {
  return tags.map((tag) => (
    <span
      key={tag}
      className={`cursor-pointer text-xs ${
        light ? 'bg-slate-100 text-slate-400' : 'bg-accent-900 text-accent-0'
      } rounded-full px-2 py-1 text-center lowercase`}
    >
      #{tag}
    </span>
  ));
}
