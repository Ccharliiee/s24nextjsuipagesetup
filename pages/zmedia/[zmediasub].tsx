//domian.com/zmedia/*

import { useRouter } from "next/router";

export default function ZMediaSubpage() {
  const zmsubrouter = useRouter();
  const zmsubrouteInfo = zmsubrouter.query.zmediasub;
  console.log(zmsubrouteInfo);
  return <h1>Subpage: This is zmediadetailsHomepage</h1>;
}
