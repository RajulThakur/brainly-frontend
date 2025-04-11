import Duplicate from '../components/icons/Duplicate';
import Plus from '../components/icons/Plus';
import Trash from '../components/icons/Trash';
import Tweet from '../components/icons/Tweet';
import Type from '../components/icons/Type';
import { IdeaType } from '../interface/Interface';
import IconRenderer from './HomeCompoent/IconRenderer';
import IntroSection from './HomeCompoent/IntroSection';
import Keyboard from './HomeCompoent/Keyboard';
import KeyboardKey from './HomeCompoent/KeyboardKeys';
import Navabar from './HomeCompoent/Navabar';
const sidebarItems = ['tweets', 'videos', 'links', 'documents'];

const Aside = () => {
  return (
    <aside className="from-accent-700/10 to-accent-900/10 flex h-full w-full flex-col gap-3 rounded-md border-r border-white/20 bg-linear-to-b px-4 py-2 backdrop-blur-md">
      <h1 className="flex h-[54px] flex-1 items-center gap-2 text-4xl font-bold text-slate-800 lg:flex-none">
        <img
          src="/image.png"
          alt="Brainly"
          className="h-8 w-8"
        />
        Brainly
      </h1>
      <ul className="fold:text-sm flex flex-1 flex-row justify-between text-xs tracking-wide md:text-base lg:justify-start lg:gap-4 lg:text-xl flex-col xl:px-4">
        {sidebarItems.map((item) => (
          <li
            className="hover:text-accent-0 relative flex w-auto flex-1 flex-col items-center justify-start gap-1 text-slate-700 capitalize transition-all duration-200 lg:flex-row lg:justify-start lg:gap-3"
            key={item}>
            <Type type={item as IdeaType} />
            <span className="cursor-pointer select-none">{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};
const BookmarkSection = () => (
  <section className="flex h-dvh flex-col justify-evenly">
    <Keyboard />
    <div className="flex flex-col gap-7">
      <div className="flex h-24 w-dvw justify-center gap-5">
        <KeyboardKey
          primary="command"
          width="138.5px"
          icon={
            <IconRenderer
              name="command"
              varient="xl"
              position="right"
            />
          }
        />
        <span className="my-auto">
          <Plus varient="2xl" />
        </span>
        <KeyboardKey primary="B" />
      </div>
      <h2 className="text-center text-5xl font-semibold">
        Easy command to Bookmark
      </h2>
    </div>
  </section>
);
const Supercharged = () => {
  return (
    <section className="relative flex h-dvh w-dvw items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 22.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 37.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="from-accent-300 relative left-[calc(70%-6rem)] aspect-1155/678 w-[56.125rem] -translate-x-1/2 translate-y-1/2 rotate-[75deg] bg-linear-to-tr to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}></div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-start text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Organise
          </h1>
          <p>Oraganise the</p>
        </div>
        <Aside />
      </div>
      <h2 className="items-center text-center text-5xl sm:text-7xl font-semibold tracking-tight text-balance text-gray-900 md:text-8xl">
        Your Workflow,
        <br />
        <span className="from-accent-600 to-accent-0 animate-charging bg-gradient-to-r bg-clip-text text-transparent">
          Supercharged.
        </span>
      </h2>
    </section>
  );
};
const PreviewCard = () => (
  <div className="flex h-full flex-col justify-between gap-2 rounded-md border border-white/20 bg-white/30 px-4 pt-1 pb-2 shadow-md backdrop-blur-md">
    <nav className="flex h-12 items-center justify-between gap-2 text-base">
      <Tweet />
      <h1 className="flex-1 cursor-pointer overflow-hidden text-base font-semibold whitespace-nowrap text-slate-700">
        <a
          href="https://x.com/matthewberman/status/1908211691411956180?s=61"
          target="_blank"
          rel="noreferrer">
          MatthewBerman on X
        </a>
      </h1>
      <section className="hover:text-accent-200 flex items-center gap-2">
        <button className="hover:text-accent-100 flex items-center justify-center gap-1 rounded-xs bg-transparent py-1 text-xs tracking-wide text-slate-800 transition-all duration-200 ease-out">
          <Trash varient="md" />
        </button>
      </section>
    </nav>
    <div className="flex-1 overflow-hidden">
      <div className="flex h-full w-full items-center justify-center">
        <img
          className="h-full w-full rounded-md object-cover"
          src="https://pbs.twimg.com/media/GntUOfsWYAADHdv.jpg"
          alt="idea"
        />
      </div>
    </div>
    <section className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-1">
        <span className="bg-accent-900 text-accent-0 cursor-pointer rounded-full px-2 py-1 text-center text-xs lowercase">
          #Nvidia
        </span>
      </div>
      <p className="text-sm text-slate-400">Added on Apr 6, 2025</p>
    </section>
  </div>
);

const ShareBrainCard = () => (
  <div className="h-auto w-96 flex-col items-center gap-4 rounded-lg border border-white/20 bg-white/70 px-6 pt-2 pb-6 shadow-xl backdrop-blur-md">
    <nav className="flex w-full items-center justify-between">
      <p className="text-3xl font-bold">Share Your Second Brain</p>
    </nav>
    <div className="flex flex-col gap-6">
      <p className="text-sm leading-5 font-light tracking-wide text-slate-500">
        Share your entire collection of notes, documents, links and videos with
        others. They'll be able to import your content into their own Second
        Brain.
      </p>
      <div className="flex w-full flex-col gap-2">
        <button className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/20 px-4 py-2 text-lg tracking-wide text-slate-800 backdrop-blur-xs transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-white/30 hover:shadow-lg active:scale-[0.98] lg:px-4 lg:py-3 lg:text-xl">
          <Duplicate />
          Share Brain
        </button>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <section className="flex mt-30 flex-col gap-10 px-40">
    <div className="grid grid-cols-2 justify-items-center gap-10 px-0 xl:px-30">
      {/* Save in One Click */}
      <div className=" relative flex h-150 w-full flex-col justify-between gap-6 rounded-3xl py-16 pr-8 pl-16">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 22.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 37.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-1rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[40deg] bg-linear-to-tr from-accent-300 to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-start text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Organise
          </h1>
          <p>Oraganise the</p>
        </div>
        <Aside />
      </div>

      {/* Get Preview */}
      <div className="flex backdrop-blur-md h-150 w-full flex-col justify-between gap-6 rounded-3xl py-16 pr-8 pl-16">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-start text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Get Preview
          </h1>
          <p>Get preview for easy finding</p>
        </div>
        <PreviewCard />
      </div>

      {/* Share with others */}
      <div className="col-span-full flex h-70 w-full items-center justify-between rounded-3xl pr-16 pl-24">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 22.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 37.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-1rem)] aspect-1155/678 w-[36.125rem] translate-x-1/2 rotate-[70deg] bg-linear-to-tr from-accent-500-300 to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className="text-start text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Share with others
          </h1>
          <p>Easy share with frinds</p>
        </div>
        <ShareBrainCard />
      </div>
    </div>
  </section>
);
export default function Example() {
  return (
    <>
      <Navabar />
      <IntroSection />
      {/* <BookmarkSection /> */}
      <Supercharged/>
      {/* <FeaturesSection /> */}
    </>
  );
}
