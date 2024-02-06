import { useSelector } from "react-redux";
import { RootState } from '../store';
interface ProgressContainerProps {
    children: React.ReactNode;
 }

const ProgressContainer = ({ children }: ProgressContainerProps) => {
  const sections = useSelector((state: RootState) => state.section.sections);
  const completedSections = sections.filter((section) => section.isCompleted).length
  const totalSections = sections.length;
  
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
        Progress
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        {completedSections} out of {totalSections} sections completed
      </h2>
      {children}
    </div>
  );
}

export default ProgressContainer