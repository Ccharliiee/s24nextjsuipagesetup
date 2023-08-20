import EeventDetail from "@/components/eevents/EeventDetails";
import { MmongoClient } from "@/dbapihelper/mongodbclienthelper";
import { ObjectId } from "mongodb";
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
  try {
    await MmongoClient.connect();
    const db = MmongoClient.db();
    const eeventsCollection = db.collection("Eeventscc");
    const eeventsid = await eeventsCollection
      .find({}, { projection: { _id: 1 } })
      .toArray();
    console.log("You successfully connected to MongoDB!");
    return {
      fallback: "blocking",
      paths: eeventsid.map((eeventid) => ({
        params: { eventid: eeventid._id.toString() },
      })),
    };
  } catch (err) {
    console.log("failed to load eventsiddata");
  } finally {
    await MmongoClient.close();
  }
};

export const getStaticProps = async (context: { params: { eventid: any } }) => {
  const eeventId = context.params.eventid;

  try {
    await MmongoClient.connect();
    const db = MmongoClient.db();
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
    await MmongoClient.close();
  }
};

export default EeventDetails;
