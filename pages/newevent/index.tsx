import NewEeventForm from "@/components/eevents/NewEeventForm";
import { useRouter } from "next/router";

const NewEventPage = () => {
  const router = useRouter();
  const addEventHandler = async (enteredEventData: any) => {
    const response = await fetch("/api/newevent", {
      method: "POST",
      body: JSON.stringify(enteredEventData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const rpData = await response.json();

    console.log(rpData);

    router.push("/");
  };

  return <NewEeventForm onAddEvent={addEventHandler} />;
};

export default NewEventPage;
