type YoutubeVideoProps = {
  videoId: string;
  startMilliseconds?: number;
};

export const YoutubeVideo = ({
  videoId,
  startMilliseconds = 0,
}: YoutubeVideoProps) => {
  return (
    <div className="relative w-full h-auto pb-[56.25%]">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?start=${startMilliseconds}&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute w-full h-full "
        style={{ aspectRatio: "16 / 9" }}
      />
    </div>
  );
};
