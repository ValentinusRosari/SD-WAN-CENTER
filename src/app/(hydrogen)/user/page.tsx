import Link from "next/link";
import { routes } from "@/config/routes";
import { Button } from "rizzui";
import PageHeader from "@/app/shared/page-header";
import { PiPlusBold } from "react-icons/pi";
import { userData } from "@/data/user-data";
import ExportButton from "@/app/shared/export-button";
import { metaObject } from "@/config/site.config";
import UserTable from "@/app/shared/user/user-list/table";

export const metadata = {
  ...metaObject("Users"),
};

const pageHeader = {
  title: "User List",
  breadcrumb: [
    
  ],
};

export default function UserListPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={userData}
            fileName="user_data"
            header="ID,Name,Username,Avatar,Email,Due Date,Amount,Status,Created At"
          />
          <Link href={routes.user.create} className="w-full @lg:w-auto">
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add User
            </Button>
          </Link>
        </div>
      </PageHeader>

      <UserTable data={userData} />
    </>
  );
}
