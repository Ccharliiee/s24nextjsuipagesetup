//domian.com/zmedia

import { Card, CardHeader, CardBody } from "@nextui-org/react";
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
      <CardHeader>This is MediaHomepage</CardHeader>
      <CardBody>
        <Table isStriped aria-label="Media collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>TIME</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>
                <a href="https://nextjs.org/docs">NEXTJS learning</a>
              </TableCell>
              <TableCell>1 day ago</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>NEXTUI learning</TableCell>
              <TableCell>19 hr ago</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>
                <NextLink href="/zmedia/zmediadetails">zmediadetails</NextLink>
              </TableCell>
              <TableCell>3 hr ago</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Wildfires</TableCell>
              <TableCell>4 hr ago</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}
