import React from "react";
import { getTimezoneOffset } from "../../utils/utils";
import Button from "../UI/Button/Button";
import Item from "../UI/Grid/Item";

const Clock = ({
  handleDeleteClock,
  handleEditClock,
  second,
  item: { id, event, eventTime, zone },
}) => {
  //console.log(item);
  return (
    <Item>
      <h3> Clcok Name: <span className="heading"> {zone.split("/")[1]}</span></h3>
      <span>
        <b>Time: </b>
        {new Date(second).toLocaleTimeString("en-US", {
          timeZone: zone,
        })}
      </span>
      <span>
        <b>Time zone: </b> {zone}
      </span>
      <span>{getTimezoneOffset(zone, new Date(2016, 0, 1))}</span>
      <span>
        <b>Event Name: </b> {event}
      </span>
      <span>
        <b>Event Time: </b> {eventTime}
      </span>
      <Button onClick={() => handleEditClock(id)}>Edit</Button>
      <Button onClick={() => handleDeleteClock(id)}>Delete</Button>
    </Item>
  );
};

export default Clock;

/**
 * clockName: "name"
event: "Evenet Nmaehhhh"
eventTime: "03:46"
id: 0
zone: "Europe/Tirane"
zoneTime: "vvvv"
 */
