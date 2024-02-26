import Link from "next/link";
import { PiPlusBold } from "react-icons/pi";
import { routes } from "@/config/routes";
import { Button } from "rizzui";
import PageHeader from "@/app/shared/page-header";
import ProductsTable from "@/app/shared/inventory/product/product-list/table";
import { productsData } from "@/data/products-data";
import { metaObject } from "@/config/site.config";
import ExportButton from "@/app/shared/export-button";

export const metadata = {
  ...metaObject("Inventory"),
};

const pageHeader = {
  title: "Inventory Management",
  breadcrumb: [],
};

export default function ProductsPage() {
  return (
    <div className="border border-muted bg-gray-0 p-7 dark:bg-gray-50 lg:p-7 rounded-lg flex flex-col min-h-[480px] [&_.widget-card-header_h5]:font-medium">
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={productsData}
            fileName="product_data"
            header="ID,Name,Category,Product Thumbnail,SKU,Stock,Price,Status,Rating"
          />
          <Link
            href={routes.inventory.createProduct}
            className="w-full @lg:w-auto"
          >
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Product
            </Button>
          </Link>
        </div>
      </PageHeader>

      <ProductsTable data={productsData} />
    </div>
  );
}
