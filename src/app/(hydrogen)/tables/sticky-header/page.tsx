import { routes } from "@/config/routes";
import { orderData } from "@/data/order-data";
import { getWidgetColumns } from "@/app/shared/inventory/order/order-list/columns";
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import TableLayout from "@/app/(hydrogen)/tables/table-layout";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject("Ticket Monitoring"),
};

const pageHeader = {
  title: "Ticket Monitoring",
  breadcrumb: [],
  className:"pt-7",
};

export default function StickyTablePage() {
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={orderData}
      fileName="order_data"
      header="Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At"
    >
      <BasicTableWidget
        title=""
        variant="minimal"
        data={orderData}
        // @ts-ignore
        getColumns={getWidgetColumns}
        enableSearch={false}
        sticky
        scroll={{ x: 1300, y: 760 }}
        pageSize={20}
        className="min-h-[480px] [&_.widget-card-header_h5]:font-medium"
      />
    </TableLayout>
  );
}
