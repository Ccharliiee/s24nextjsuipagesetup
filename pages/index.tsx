import EeventList from "@/components/eevents/EeventList";

import { MongoClient, ServerApiVersion } from "mongodb";

export const getStaticProps = async () => {
  const client = new MongoClient(process.env.MONGODB_URL ?? "", {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    const db = client.db();
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
      revalidate: 30,
    };
  } catch (err) {
    console.log("failed to load eventsdata");
  } finally {
    await client.close();
  }
};

export default function IndexPage(props: { eeventsapi: any }) {
  return <EeventList eevents={props.eeventsapi} />;
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
