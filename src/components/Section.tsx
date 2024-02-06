'use client'
import { Sections } from '@/utils/interfaces/index';
import { useDispatch } from 'react-redux';
import CheckIcon from '../components/CheckIcon';
import { deleteSection, toggleCompletion } from '../store/slices/section-slice';

const Section = ({ id, number, isCompleted }: Sections) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteSection(id));
  };

  const toggleComplete = () => {
    dispatch(toggleCompletion(id));
  }

  const sectionStatus = isCompleted
    ? 'This section is completed.'
    : 'This section is not completed.';
  return (
    <div className="grid gap-1 border border-green-500 rounded-md p-4">
      <h3 className="text-lg font-bold flex items-center">
        {isCompleted && <CheckIcon className="h-5 w-5 text-green-500 mr-2" />}
        Section {number}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{sectionStatus}</p>
      <div className="mt-5 flex justify-between">
        <button
          onClick={toggleComplete}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          {isCompleted ? 'Set Incomplete' : 'Set Complete'}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Section;
