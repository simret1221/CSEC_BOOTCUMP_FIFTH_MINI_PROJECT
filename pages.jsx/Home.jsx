import { useAtom } from 'jotai';
import { tasksAtom } from './store';

const [tasks, setTasks] = useAtom(tasksAtom);
