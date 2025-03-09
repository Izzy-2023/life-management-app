export default function JournalCard({ entry }) {
  return (
      <div>
          <h3>{entry.title}</h3>
          <p>{entry.content}</p>
      </div>
  );
}
