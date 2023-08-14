import { useAppSelector } from '../../../store/hooks';

export const TodoSection = () => {
  const { value } = useAppSelector((state) => state.todo);
  return <section>{value}</section>;
};
