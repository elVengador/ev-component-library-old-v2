export const Hashtag = ({ id }: { id: string }) => (
  <a href={`#${id}`} className="px-2 text-ev-primary/50 hover:text-ev-primary">
    #
  </a>
);
