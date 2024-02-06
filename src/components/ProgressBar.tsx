import { useSelector } from 'react-redux';
import { RootState } from '../store';
const ProgressBar = () => {
  const sections = useSelector((state: RootState) => state.section.sections);
  const completedSections = sections.filter((section) => section.isCompleted).length;
  const totalSections = sections.length;

  const progressPercentage = (completedSections/totalSections) * 100
  
  return (
    <div className="w-3/4 h-2 bg-gray-200 rounded-full">
      <div
        className="h-full bg-green-500 rounded-full"
        style={{
          width: `${progressPercentage}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
