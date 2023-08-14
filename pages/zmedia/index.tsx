//domian.com/zmedia

import { Card, CardHeader, CardBody, Avatar, Badge } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import NextLink from "next/link";

export default function MediaHomepage() {
  return (
    <Card>
      <CardHeader className="text-center justify-center align-center flex gap-3 text-4xl">
        This is MediaHomepage
      </CardHeader>
      <CardBody>
        <Table
          isStriped
          hideHeader
          removeWrapper
          aria-label="Media collection table"
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell className="text-center justify-center align-center flex gap-3 text-2xl font-bold">
                <NextLink href="/zmedia/zmediadetails">zmediadetails</NextLink>
                <Badge content="5" color="primary">
                  <Avatar
                    radius="md"
                    size="md"
                    src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
                  />
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}
