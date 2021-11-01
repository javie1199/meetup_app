import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPages() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch(
      "https://react-getting-started-1b697-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];
  
        //transform object data into array
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
  
        setIsLoading(false);
        setMeetupData(meetups);
      });
  }, [])
  

  if (isLoading) {
    return <div>.... is loading</div>;
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupData} />
    </div>
  );
}

export default AllMeetupsPages;
