"use client";

import {
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="data-table">
      <div className="overflow-x-auto">
        <div className="overflow-hidden rounded-xl shadow-2xl">
          <Table className="w-full text-left text-sm text-gray-300">
            <TableHeader className="cormorant-garamond bg-gray-800 text-xs uppercase tracking-wider text-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="border-b border-gray-700">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead 
                        key={header.id}
                        className="px-4 py-3 font-semibold text-white"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="cormorant-garamond divide-y divide-gray-700 bg-black/20 backdrop-blur-md">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="border-b border-gray-700/50 transition-colors duration-200 hover:bg-black/40"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell 
                        key={cell.id}
                        className="px-4 py-3 text-gray-300"
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell 
                    colSpan={columns.length} 
                    className="h-24 px-4 py-3 text-center text-gray-400"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      
      <div className="cormorant-garamond flex items-center justify-between pt-6">
        <div className="text-sm text-gray-400">
          Showing {table.getRowModel().rows.length} of {data.length} appointments
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="border-gray-600 bg-gray-800/50 text-white backdrop-blur-sm hover:bg-gray-700/70"
          >
            <Image
              src="/assets/icons/arrow.svg"
              width={24}
              height={24}
              alt="arrow"
              className="size-4"
            />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border-gray-600 bg-gray-800/50 text-white backdrop-blur-sm hover:bg-gray-700/70"
          >
            <Image
              src="/assets/icons/arrow.svg"
              width={24}
              height={24}
              alt="arrow"
              className="size-4 rotate-180"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
