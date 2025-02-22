import { RedirectRule, columns } from "@/app/dashboard/columns";
import { DataTable } from "@/components/core/DataTable";

const redirectRules: RedirectRule[] = [
  {
    source: "/old-blog",
    destination: "/blog",
    type: "permanent",
  },
  {
    source: "/legacy-products",
    destination: "/products",
    type: "temporary",
  },
  {
    source: "/old-docs/(.*)",
    destination: "/documentation/$1",
    type: "permanent",
  },
];

async function getData(): Promise<RedirectRule[]> {
  return redirectRules;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
