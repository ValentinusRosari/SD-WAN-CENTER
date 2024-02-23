import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import ImportButton from '@/app/shared/import-button';

import { metaObject } from '@/config/site.config';
import CreateUser from '@/app/shared/user/create-user';

export const metadata = {
  ...metaObject('Create User'),
};

const pageHeader = {
  title: 'Create User',
  breadcrumb: [
    
  ],
};

export default function UserCreatePage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <ImportButton title="Upload File" className="mt-4 @lg:mt-0" />
      </PageHeader>

      <CreateUser />
    </>
  );
}
