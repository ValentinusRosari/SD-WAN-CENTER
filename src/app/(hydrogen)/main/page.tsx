import MainDashboard from "@/app/shared/main/dashboard";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject("Main"),
};

export default function MainDashboardPage() {
  return <MainDashboard />;
}
