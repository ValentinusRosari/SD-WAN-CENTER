import FileDashboard from '@/app/shared/file/dashboard';
import { metaObject } from '@/config/site.config';
import MainDashboardPage from './main/page';

export const metadata = {
  ...metaObject('main dashboard'),
};

export default function FileDashboardPage() {
  return <MainDashboardPage />;
}
