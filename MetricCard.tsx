type Props = { title: string; value: string };
export default function MetricCard({ title, value }: Props) {
  return (
    <div className="bg-white rounded shadow p-6 flex flex-col items-center">
      <div className="text-lg text-gray-500">{title}</div>
      <div className="text-3xl font-bold mt-2">{value}</div>
    </div>
  );
}