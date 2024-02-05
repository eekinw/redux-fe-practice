
const ProgressBar = () => {
  return (
    <div className="w-3/4 h-2 bg-gray-200 rounded-full">
      <div
        className="h-full bg-green-500 rounded-full"
        style={{
          width: '30%',
        }}
      />
    </div>
  );
}

export default ProgressBar
