"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";

export interface BazaarSellLog {
  date: string;
  item: {
    name: string;
    image: string;
  };
  buyPrice: number;
  sellPrice: number;
  profit: number;
}

export const columns: ColumnDef<BazaarSellLog>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <div className="flex gap-2 items-center">
          Date Last Sold (TCT)
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
    accessorKey: "buyPrice",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={"float-right"}
      >
        <div className="flex gap-2 items-center">
          Buy Price
          <HugeiconsIcon icon={ArrowUpDown} />
        </div>
      </Button>
    ),
    cell: ({ row }) => {
      const buyPrice = row.original.buyPrice;
      const moneyFormatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(buyPrice);

      return <div className="text-right font-medium">{moneyFormatted}</div>;
    }
  },
  {
    accessorKey: "sellPrice",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={"float-right"}
      >
        <div className="flex gap-2 items-center">
          Sell Price
          <HugeiconsIcon icon={ArrowUpDown} />
        </div>
      </Button>
    ),
    cell: ({ row }) => {
      const sellPrice = row.original.sellPrice;
      const moneyFormatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(sellPrice);

      return <div className="text-right font-medium">{moneyFormatted}</div>;
    }
  },
  {
    accessorKey: "profit",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={"float-right"}
      >
        <div className="flex gap-2 items-center">
          Profit
          <HugeiconsIcon icon={ArrowUpDown} />
        </div>
      </Button>
    ),
    cell: ({ row }) => {
      const profit = row.original.profit;
      const moneyFormatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(profit);

      return <div className="text-right font-medium">{moneyFormatted}</div>;
    }
  },

];
