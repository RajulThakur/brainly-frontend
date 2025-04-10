const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ['control', 'option', 'command', 'space', 'command', 'option'],
];

const highlightKeys = ['command']; // you can add more if needed

const KeyboardGlow = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="bg-gradient-radial rounded-3xl from-black via-zinc-900 to-black p-10">
        {keys.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="mb-3 flex justify-center">
            {row.map((key, index) => {
              const isHighlight = highlightKeys.includes(key);
              const baseStyle = `m-1 w-[60px] h-[60px] flex items-center justify-center text-sm font-medium rounded-xl transition-all duration-300`;
              const glowStyle = isHighlight
                ? 'bg-gradient-to-br from-pink-400 to-red-500 text-white shadow-lg shadow-pink-600/50 font-bold'
                : 'bg-white/5 text-zinc-500 opacity-10';

              return (
                <div
                  key={index}
                  className={`${baseStyle} ${glowStyle}`}>
                  {key}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

function Test() {
  return (
    <div>
      <KeyboardGlow />
    </div>
  );
}

export default Test;
