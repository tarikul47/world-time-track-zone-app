/**
 * GMT Find Out
 */
const getTimezoneOffset = (tz, hereDate) => {
  hereDate = new Date(hereDate || Date.now());
  hereDate.setMilliseconds(0); // for nice rounding

  const hereOffsetHrs = (hereDate.getTimezoneOffset() / 60) * -1,
    thereLocaleStr = hereDate.toLocaleString("en-US", { timeZone: tz }),
    thereDate = new Date(thereLocaleStr),
    diffHrs = (thereDate.getTime() - hereDate.getTime()) / 1000 / 60 / 60,
    thereOffsetHrs = hereOffsetHrs + diffHrs;

  // console.log(
  //   tz,
  //   thereDate,
  //   "UTC" + (thereOffsetHrs < 0 ? "" : "+") + thereOffsetHrs
  // );
  return "GMT : " + (thereOffsetHrs < 0 ? "" : "+") + thereOffsetHrs;
};

/**
 * unique id generator
 */
function* generateId() {
  var id = 1;
  while (true) {
    yield id++;
  }
}
const guid = generateId();

/**
 * default clcok data
 */

const defaultClcoks = [
  {
    id: guid.next().value,
    event: "Evenet Name",
    eventTime: "10:43",
    zone: "Atlantic/Bermuda",
  },
  {
    id: guid.next().value,
    event: "Hekllo Event 3",
    eventTime: "10:43",
    zone: "Africa/Porto-Novo",
  },
  {
    id: guid.next().value,
    event: "Hekllo Event",
    eventTime: "17:44",
    zone: "America/Belize",
  },
  {
    id: guid.next().value,
    event: "Event 2",
    eventTime: "09:42",
    zone: "Antarctica/Rothera",
  },
  {
    id: guid.next().value,
    event: "Evenet Nmaehhhh",
    eventTime: "05:46",
    zone: "Europe/Brussels",
  },
  {
    id: guid.next().value,
    event: "Evenet Nmae",
    eventTime: "05:44",
    zone: "Africa/Porto-Novo",
  },
];


/**
 * Initial values for clock
 */
const intialvalues = {
  zone: "",
  event: "",
  eventTime: "",
};

export { getTimezoneOffset, intialvalues, guid, defaultClcoks };

