import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewEventPage = () => {
  const addEventHandler = (enteredEventData: any) => {
    console.log(enteredEventData);
  };

  return <NewMeetupForm onAddEvent={addEventHandler} />;
};

export default NewEventPage;
