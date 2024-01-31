import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      year: 2024,
      events: [
        {
          name: "Code-a-thon",
          date: "2024-01-01",
          id: "1",
        },
        {
          name: "Technitude",
          date: "2024-01-02",
          id: "2",
        },
      ],
    },
    {
      year: 2023,
      events: [
        {
          name: "Event 1",
          date: "2024-01-01",
          id: "11",
        },
        {
          name: "Event 2",
          date: "2024-01-02",
          id: "21",
        },
      ],
    },
  ];

  const handleMoreIconClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("MoreIcon Clicked!");
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="mt-3">
        {data?.map((year, index) => {
          return (
            <Accordion
              key={index}
              defaultExpanded={index === 0}
              style={{
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <p className="title">{year.year}</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordion-details">
                  <div className="row ">
                    {year.events.map((event, eventIndex) => {
                      return (
                        <div
                          key={eventIndex}
                          className="accordion-details-item col-6 col-md-3 col-lg-2"
                        >
                          <NavLink to={`/${event.id}`}>
                            <div className="folder-cover">
                              <MoreVertIcon
                                className="more-icon"
                                onClick={handleMoreIconClick}
                              />
                              <FolderRoundedIcon className="folder-icon" />
                              <p className="accordion-details-item-title">
                                {event.name}
                              </p>
                              {/* <p className="accordion-details-item-date">
                                {event.date}
                              </p> */}
                            </div>
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
