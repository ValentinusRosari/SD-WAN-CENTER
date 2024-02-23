import { PiDownloadSimpleBold } from 'react-icons/pi';
import PrintButton from '@/app/shared/print-button';
import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import UserDetails from '@/app/shared/user/user-details';

export const metadata = {
  ...metaObject('User'),
};

const pageHeader = {
  title: 'User Details',
  breadcrumb: [
    
  ],
};

export default function UserDetailsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <PrintButton />
          <Button className="w-full @lg:w-auto">
            <PiDownloadSimpleBold className="me-1.5 h-[17px] w-[17px]" />
            Download
          </Button>
        </div>
      </PageHeader>

      <UserDetails />
    </>
  );
}
