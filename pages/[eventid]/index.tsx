import EeventDetail from "@/components/eevents/EeventDetails";

const EeventDetails = (props: {
  id: any;
  image: any;
  title: any;
  address: any;
  description: any;
}) => {
  return (
    <EeventDetail
      id={props.id}
      image={props.image}
      title={props.title}
      address={props.address}
      description={props.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          eventid: "ik1",
        },
      },
      {
        params: {
          eventid: "ik2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context: { params: { eventid: any } }) => {
  const eeventId = context.params.eventid;
  return {
    props: {
      id: eeventId,
      image:
        "https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "First Event",
      address: "5 street, One City",
      description: "This is a first Event",
    },
    revalidate: 30,
  };
};

export default EeventDetails;
