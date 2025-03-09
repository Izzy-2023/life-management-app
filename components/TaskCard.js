export default function TaskCard({ task }) {
  return (
      <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <p>{task.completed ? 'Completed' : 'Pending'}</p>
      </div>
  );
}
