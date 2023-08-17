import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./EeventItem.module.css";
import { Button, Image } from "@nextui-org/react";

const EeventItem = (props: any) => {
  const eeventDetailsRoute = useRouter();
  const showEventDetailsHandler = () => {
    eeventDetailsRoute.push("/" + props.id);
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <Button
            onClick={showEventDetailsHandler}
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Show Details
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default EeventItem;
