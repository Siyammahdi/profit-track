
import DashboardCards from "./Containers/DashboardCards";
import DashboardLayout from "./layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <div className="w-1/2">
          <DashboardCards />
        </div>
      </div>
    </DashboardLayout>
  );
}
