
interface ProgressContainerProps {
    children: React.ReactNode;
 }

const ProgressContainer = ({ children }: ProgressContainerProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
        Progress
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        3 out of 5 sections completed
      </h2>
      { children }
    </div>
  );
}

export default ProgressContainer