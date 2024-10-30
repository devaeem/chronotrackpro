"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Tablelist = ({ invoices }: any) => {
  const renderStatus = (status: string) => {
    switch (status) {
     case "Paid":
      return (
        <Badge
          variant="outline"
          className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors dark:bg-green-400"
        >
         ขำระเงินสำเร็จ
        </Badge>
      )
    case "Pending":
      return (
        <Badge
          variant="outline"
          className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-400 transition-colors"
        >
           รอการขำระเงิน
        </Badge>
      )
    case "Unpaid":
      return (
        <Badge
          variant="outline"
          className="bg-red-100 text-red-800 hover:bg-red-200 transition-colors dark:bg-red-400"
        >
          ขำระเงินไม่สำเร็จ
        </Badge>
      )
    default:
      return (
        <Badge
          variant="outline"
          className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
        >
          Unknown Status
        </Badge>
      )
     }
  };

  return (
    <>
      <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>รายการทำธุรกรรม</CardTitle>
            <CardDescription>
            รายการการซื้อขายล่าสุด
            </CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="#">
            ดูทั้งหมด
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>รายการใบแจ้งหนี้ของคุณล่าสุด</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ใบแจ้งหนี้</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>ช่องทางขำระเงิน</TableHead>
                <TableHead className="text-right">จำนวน</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice: any) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{renderStatus(invoice.paymentStatus)}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>ทั้งหมด</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Tablelist;
