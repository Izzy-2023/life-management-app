export default function HabitCard({ habit }) {
  return (
      <div>
          <h3>{habit.name}</h3>
          <p>{habit.frequency}</p>
      </div>
  );
}
