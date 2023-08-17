import EeventDetail from "@/components/eevents/EeventDetails";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import Head from "next/head";

const EeventDetails = (props: {
  id: any;
  image: any;
  title: any;
  address: any;
  description: any;
}) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={props.description} />
      </Head>
      <EeventDetail
        id={props.id}
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
      />{" "}
    </>
  );
};

export const getStaticPaths = async () => {
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
    const eeventsid = await eeventsCollection.find({}, { _id: true }).toArray();
    console.log("You successfully connected to MongoDB!");
    return {
      fallback: false,
      paths: eeventsid.map((eeventid) => ({
        params: { eventid: eeventid._id.toString() },
      })),
    };
  } catch (err) {
    console.log("failed to load eventsiddata");
  } finally {
    await client.close();
  }
};

export const getStaticProps = async (context: { params: { eventid: any } }) => {
  const eeventId = context.params.eventid;

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
    const eevent = await eeventsCollection.findOne({
      _id: new ObjectId(eeventId),
    });
    console.log("You successfully connected to MongoDB!");

    return {
      props: {
        id: eeventId,
        image: eevent?.image,
        title: eevent?.title,
        address: eevent?.address,
        description: eevent?.description,
      },
      revalidate: 1,
    };
  } catch (err) {
    console.log("failed to load eventdata");
  } finally {
    await client.close();
  }
};

export default EeventDetails;
