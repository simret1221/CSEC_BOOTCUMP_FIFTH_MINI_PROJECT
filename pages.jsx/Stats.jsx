import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';
import StatsPage from './StatsPage';

function App() {
  return (
    <TaskProvider>
      <Router>
        <nav>
          <Link to="/">Tasks</Link> | <Link to="/stats">Stats</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}
import { useAtom } from 'jotai';
import { tasksAtom } from './store';

const [tasks, setTasks] = useAtom(tasksAtom);

