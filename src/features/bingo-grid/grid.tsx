export const Grid = ({ size }: { size: number }) => {
  const totalSquares = size * size;

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`grid gap-1 border-2 border-gray-800 bg-white p-1`}
        style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
      >
        {Array.from({ length: totalSquares }, (_, index) => (
          <input
            key={index}
            type="text"
            className="aspect-square w-full text-center text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 motion-preset-pop"
          />
        ))}
      </div>
    </div>
  );
};
