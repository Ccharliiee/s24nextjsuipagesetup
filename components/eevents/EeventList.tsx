import EeventItem from "./EeventItem";
import classes from "./EeventList.module.css";

const EeventList = (props: any) => {
  return (
    <ul className={classes.list}>
      {props.eevents.map((eevent: any) => (
        <EeventItem
          key={eevent.id}
          id={eevent.id}
          image={eevent.image}
          title={eevent.title}
          address={eevent.address}
        />
      ))}
    </ul>
  );
};

export default EeventList;
