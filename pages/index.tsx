import EeventList from "@/components/eevents/EeventList";
import { MmongoClient } from "@/dbapihelper/mongodbclienthelper";
import Head from "next/head";

export const getStaticProps = async () => {
  try {
    await MmongoClient.connect();
    const db = MmongoClient.db();
    const eeventsCollection = db.collection("Eeventscc");
    const eevents = await eeventsCollection.find().toArray();
    console.log("You successfully connected to MongoDB!");
    return {
      props: {
        eeventsapi: eevents.map((eevent) => ({
          title: eevent.title,
          address: eevent.address,
          image: eevent.image,
          id: eevent._id.toString(),
        })),
      },
      revalidate: 1,
    };
  } catch (err) {
    console.log("failed to load eventsdata");
  } finally {
    await MmongoClient.close();
  }
};

export default function IndexPage(props: { eeventsapi: any }) {
  return (
    <>
      <Head>
        <title>List of Events</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Explore a List of Events" />
      </Head>
      <EeventList eevents={props.eeventsapi} />
    </>
  );
}

// export const getServerSideProps = async (context: { req: any; res: any }) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       eeventsapi: sistaticeventsapi,
//     },
//   };
// };
