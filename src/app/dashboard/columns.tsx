"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

// TODO: Use a Zod schema here

type RedirectType = "permanent" | "temporary";

export type RedirectRule = {
  source: string;
  destination: string;
  type: RedirectType;
};

export const columns: ColumnDef<RedirectRule>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "source",
    header: "Source",
    enableColumnFilter: true,
  },
  {
    accessorKey: "destination",
    header: "Destination",
    enableColumnFilter: true,
  },
  {
    accessorKey: "type",
    header: "Type",
    enableColumnFilter: true,
  },
];
