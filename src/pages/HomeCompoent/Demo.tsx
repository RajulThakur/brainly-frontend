export default function Demo() {
  return (
    <div className="relative px-60 h-dvh w-dvw">
      <img
        src="/assets/desktop.png"
        alt="Desktop"
        className="absolute top-1/2 left-1/2 -z-10 w-[1400px] -translate-x-1/2 -translate-y-1/2 transform object-contain"
      />
      <div className="z-10 mx-auto max-w-auto translate-y-1/4 opacity-95">
        <video
          className="rounded-2xl"
          src="/assets/demo.mov"
          loop
        />
      </div>
    </div>
  );
}
