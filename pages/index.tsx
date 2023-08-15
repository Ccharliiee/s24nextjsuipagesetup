import MeetupList from "@/components/meetups/MeetupList";

const sistaticevents = [
  {
    id: "ik1",
    title: "A First staticevent",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "5 street, One City",
    description: "This is a first staticevent!",
  },
  {
    id: "ik2",
    title: "A Second staticevent",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mount_Everest_as_seen_from_Drukair2_PLW_edit_Cropped.jpg",
    address: "10 ave, Tea City",
    description: "This is a second staticevent!",
  },
];

export default function IndexPage() {
  return <MeetupList meetups={sistaticevents} />;
}
