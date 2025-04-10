import Plus from '../components/icons/Plus';
import DetailComponent from './HomeCompoent/DetailComponent';
import IconRenderer from './HomeCompoent/IconRenderer';
import IntroSection from './HomeCompoent/IntroSection';
import Keyboard from './HomeCompoent/Keyboard';
import KeyboardKey from './HomeCompoent/KeyboardKeys';
import Navabar from './HomeCompoent/Navabar';

export default function Example() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <Navabar />
      </header>
      <IntroSection />
      <section className="flex h-dvh flex-col justify-between">
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
      <section>
        <DetailComponent />
      </section>
    </>
  );
}
