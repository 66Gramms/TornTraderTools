"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpDown } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";

export interface BuyLog {
  date: string;
  item: {
    name: string;
    image: string;
  };
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
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <div className="flex gap-2 items-center">
          Date (TCT)
          <HugeiconsIcon icon={ArrowUpDown} />
        </div>
      </Button>
    ),
  },
  {
    accessorKey: "item",
    header: () => "Item",
    cell: ({ row }) => {
      const item = row.original.item;
      return (
        <div className="flex">
          <img src={item.image} className="max-h-6 -ml-4" />
          {item.name}
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={"float-right"}
      >
        <div className="flex gap-2 items-center">
          Total price
          <HugeiconsIcon icon={ArrowUpDown} />
        </div>
      </Button>
    ),
    cell: ({ row }) => {
      const total = row.original.total;
      const each = row.original.each;

      return (
        <Tooltip>
          <TooltipTrigger render={getMoneyFormatted(total)} />
          <TooltipContent>{getMoneyFormatted(each)} each</TooltipContent>
        </Tooltip>
      );
    },
  },
];
