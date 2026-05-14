"use client";

import type { ColumnDef } from "@tanstack/react-table";

export interface BuyLog {
  date: string;
  name: string;
  quantity: number;
  each: number;
  total: number;
}

const getMoneyFormatted = (amount: number) => {
  const moneyFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

  return <div className="text-right font-medium">{moneyFormatted}</div>;
};

export const columns: ColumnDef<BuyLog>[] = [
  {
    accessorKey: "date",
    header: "Date (TCT)",
  },
  {
    accessorKey: "name",
    header: "Item",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "each",
    header: () => <div className="text-right">Price / each</div>,
    cell: ({ row }) => {
      const each = parseFloat(row.getValue("each"));
      return getMoneyFormatted(each);
    },
  },
  {
    accessorKey: "total",
    header: () => <div className="text-right">Total price</div>,
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("total"));
      return getMoneyFormatted(total);
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const payment = row.original;
  //   },
  // },
];
