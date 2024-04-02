import React, { useState } from "react";
import "./Practice.css";
import Header from "../../components/d_header/Header";
import topic from "../../assets/topic.png";
import PracticeStage from "../../components/practicephases/PracticeStage";

const Practice = () => {
  const tableTopics = [
    {
      id: 1,
      topic:
        "You are at a friends birthday party, Give a 30 seconds speech about them",
      time: 30,
      tag: "social",
      img: topic,
    },
    {
      id: 2,
      topic:
        "You are a teacher, give a 1 minute speech on the importance of education",
      time: 60,
      tag: "educational",
      img: topic,
    },
    {
      id: 3,
      topic:
        "You are a salesperson, give a 1 minute speech on the importance of your product",
      time: 60,
      tag: "sales",
      img: topic,
    },
    {
      id: 4,
      topic:
        "You are a motivational speaker, give a 1 minute speech on the importance of self confidence",
      time: 60,
      tag: "motivational",
      img: topic,
    },
    {
      id: 5,
      topic:
        "You are a politician, give a 1 minute speech on the importance of good governance",
      time: 60,
      tag: "political",
      img: topic,
    },
    {
      id: 6,
      topic:
        "You are a comedian, give a 1 minute speech on the importance of humor",
      time: 60,
      tag: "comedy",
      img: topic,
    },
    {
      id: 7,
      topic:
        "You are a preacher, give a 1 minute speech on the importance of faith",
      time: 60,
      tag: "religious",
      img: topic,
    },
    {
      id: 8,
      topic:
        "You are a coach, give a 1 minute speech on the importance of teamwork",
      time: 60,
      tag: "sports",
      img: topic,
    },
    {
      id: 9,
      topic:
        "You are a scientist, give a 1 minute speech on the importance of research",
      time: 60,
      tag: "science",
      img: topic,
    },
    {
      id: 10,
      topic:
        "You are a celebrity, give a 1 minute speech on the importance of privacy",
      time: 60,
      tag: "celebrity",
      img: topic,
    },
  ];

  const [tableTopic, setTableTopic] = useState(tableTopics[0]);

//   const [timer, setTimer] = useState(0);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(0);
  const [status, setStatus] = useState("not-started");

  const handleTableTopic = () => {
    const number = Math.floor(Math.random() * 10);
    setTableTopic(tableTopics[number]);
  };

  const prepareToSpeak = () => {
    setStatus("preparing");
    setTimeout(() => {
      setStatus("speaking");
      setTimeout(() => {
        setStatus("analyzing");
        setTimeout(() => {
          setStatus("done");
        }, 3 * 1000);
      }, tableTopic.time * 1000);
    }, 3000);
  };

  return (
    <div className="ds">
      <Header value="practice" />
      <section className="practice-container">
        <div className="practice-holder">
          <PracticeStage
            status={status}
            handleTableTopic={handleTableTopic}
            tableTopic={tableTopic}
            prepareToSpeak={prepareToSpeak}
            setStatus={setStatus}
          />
        </div>
      </section>
    </div>
  );
};

export default Practice;
