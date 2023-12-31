import { Image } from "@nextui-org/react";
import classes from "./EeventDetails.module.css";

const EeventDetail = (props: any) => {
  return (
    <section className={classes.detail}>
      <Image src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default EeventDetail;
