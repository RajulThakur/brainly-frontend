import {motion} from 'framer-motion';

function DetailComponent() {
  const features = [
    {
      title: 'Smart Command Detection',
      desc: 'Automatically detects and highlights keyboard shortcuts as you type, making it easier to learn and remember complex commands.',
      icon: '⌘',
    },
    {
      title: 'Real-time Suggestions',
      desc: 'Get intelligent suggestions for keyboard shortcuts based on your workflow and most frequently used commands.',
      icon: '💡',
    },
    {
      title: 'Cross-platform Support',
      desc: 'Seamlessly works across different operating systems, automatically adjusting shortcuts for Mac, Windows, and Linux.',
      icon: '🔄',
    },
  ];

  return (
    <section className="relative py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/0 via-gray-50/70 to-white" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover how our keyboard shortcuts enhance your productivity
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.2}}
              viewport={{once: true}}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <div className="mb-4">
                <div className="bg-accent-50 mb-6 flex h-12 w-12 items-center justify-center rounded-lg text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-lg leading-8 font-semibold tracking-tight text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {feature.desc}
                </p>
              </div>

              <motion.div
                whileHover={{scale: 1.05}}
                className="bg-accent-50 text-accent-600 hover:bg-accent-100 mt-6 cursor-pointer rounded-lg px-4 py-2.5 text-center text-sm font-semibold">
                Learn more
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailComponent;
