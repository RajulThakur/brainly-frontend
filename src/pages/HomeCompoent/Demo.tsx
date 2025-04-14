export default function Demo() {
  return (
    <div className="relative flex h-dvh w-full snap-start items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="absolute inset-4 -z-10 overflow-hidden rounded-2xl transition-all duration-300 sm:inset-8 sm:rounded-3xl md:inset-12 md:rounded-[2rem] lg:inset-18">
        <div className="h-full w-full scale-[0.98] bg-[url(/assets/desktop.png)] bg-contain bg-center bg-no-repeat transition-transform duration-500 hover:scale-100" />
      </div>
      <div className="mx-auto w-full max-w-[77%]">
        <video
          className="pointer-events-none w-full rounded-xl shadow-lg transition-all duration-300 sm:rounded-2xl sm:shadow-xl lg:rounded-3xl lg:shadow-2xl"
          src="/assets/demo.mov"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
        />
      </div>
    </div>
  );
}
