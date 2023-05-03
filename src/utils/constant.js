const STATE_LEVEL_FILLS = [
  "white",
  "#3598db",
  "#30cc70",
  "#f3c218",
  "#d58337",
  "#e84c3d",
];

const MENU_OPTIONS = [
  { label: "Lived there", level: 5, fill: "#e84c3d" },
  { label: "Stayed there", level: 4, fill: "#d58337" },
  { label: "Visited there", level: 3, fill: "#f3c218" },
  { label: "Alighted there", level: 2, fill: "#30cc70" },
  { label: "Passed there", level: 1, fill: "#3598db" },
  { label: "Never been there", level: 0, fill: "white" },
];

const STATE_DATA = [
  { id: "AN", state: "Andaman and Nicobar Islands" },
  { id: "AP", state: "Andhra Pradesh" },
  { id: "AR", state: "Arunachal Pradesh" },
  { id: "AS", state: "Assam" },
  { id: "BR", state: "Bihar" },
  { id: "CT", state: "Chhattisgarh" },
  { id: "PY", state: "Puducherry" },
  { id: "PB", state: "Punjab" },
  { id: "RJ", state: "Rajasthan" },
  { id: "SK", state: "Sikkim" },
  { id: "TN", state: "Tamil Nadu" },
  { id: "CH", state: "Chandigarh" },
  { id: "TS", state: "Telangana" },
  { id: "TR", state: "Tripura" },
  { id: "UP", state: "Uttar Pradesh" },
  { id: "UK", state: "Uttarakhand" },
  { id: "WB", state: "West Bengal" },
  { id: "OD", state: "Odisha" },
  { id: "DN", state: "Dadra and Nagar Haveli" },
  { id: "DD", state: "Daman and Diu" },
  { id: "GA", state: "Goa" },
  { id: "GJ", state: "Gujarat" },
  { id: "HR", state: "Haryana" },
  { id: "HP", state: "Himachal Pradesh" },
  { id: "JK", state: "Jammu and Kashmir" },
  { id: "JH", state: "Jharkhand" },
  { id: "KA", state: "Karnataka" },
  { id: "KL", state: "Kerala" },
  { id: "LD", state: "Lakshadweep" },
  { id: "MP", state: "Madhya Pradesh" },
  { id: "MH", state: "Maharashtra" },
  { id: "MN", state: "Manipur" },
  { id: "ML", state: "Meghalaya" },
  { id: "MZ", state: "Mizoram" },
  { id: "NL", state: "Nagaland" },
  { id: "DL", state: "Delhi" },
  { id: "LA", state: "Ladakh" },
];

const STATE_LENGTH = STATE_DATA.length;

export { STATE_LEVEL_FILLS, MENU_OPTIONS, STATE_DATA, STATE_LENGTH };
