import { useDispatch } from 'react-redux';
import { addSection, deleteSection } from '../store/slices/section-slice';

const useAddSection = () => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addSection());
  };

  return { add };
};

const useDeleteSection = () => {
  const dispatch = useDispatch();

  const remove = (id: string) => {
    dispatch(deleteSection(id));
  };

  return { remove };
};

export { useAddSection, useDeleteSection };
