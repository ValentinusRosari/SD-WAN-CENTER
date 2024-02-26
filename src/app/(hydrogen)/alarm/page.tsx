import GrafanaDashboard from "@/app/shared/alarm/dashboard/grafana-dashboard";
import { metaObject } from "@/config/site.config";

export const metadata = {
  className:"pt-7",
  ...metaObject("Alarm Monitoring"),
};

export default function GrafanaDashboardPage() {
  return <GrafanaDashboard />;
}
