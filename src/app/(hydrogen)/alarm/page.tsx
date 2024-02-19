import GrafanaDashboard from "@/app/shared/alarm/dashboard/grafana-dashboard";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject("Alarm Monitoring"),
};

export default function GrafanaDashboardPage() {
  return <GrafanaDashboard />;
}
