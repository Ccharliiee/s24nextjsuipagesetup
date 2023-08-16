import NewEeventForm from "@/components/eevents/NewEeventForm";

const NewEventPage = () => {
  const addEventHandler = (enteredEventData: any) => {
    console.log(enteredEventData);
  };

  return <NewEeventForm onAddEvent={addEventHandler} />;
};

export default NewEventPage;
