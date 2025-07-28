import DashboardLayout from '../components/DashboardLayout';
import ChartCard from '../components/ChartCard';
import MetricCard from '../components/MetricCard';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetricCard title="Total Users" value="1,240" />
        <MetricCard title="Active Sessions" value="87" />
      </div>
      <div className="mt-8">
        <ChartCard />
      </div>
    </DashboardLayout>
  );
}