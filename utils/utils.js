const healthViews = [
  { title: "Blood Pressure", icon: "heart-pulse", color: "#ac2611" },
  { title: "Blood Glucose", icon: "droplet", color: "#3e2a82" },
  { title: "Follow Up", icon: "calendar-days", color: "#1f6e55" },
  { title: "Medications", icon: "capsules", color: "#653115" },
];

const bgCheckTime = [{
label: "Over 8 hours ago",
value: "fasting",
},
{
label: "Within 2 hours ago",
value: "2 hrs post prandial",
},
{
label: "Not sure",
value: "random",
}]

export {healthViews, bgCheckTime}