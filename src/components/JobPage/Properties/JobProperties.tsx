import "./JobProperties.css";
import JobPropertiesTitle from "./JobPropertiesTitle";
import Skills from "../../../assets/skills.svg";
import Experience from "../../../assets/experience.svg";
import Business from "../../../assets/business.svg";
import Location from "../../../assets/location.svg";
import Tag from "../../Tag/Tag";
type Props = {};
const skills = [
  {
    text: "Rhino",
    backgroundColor: "#0F1420",
    borderRadius: 40,
    textColor: "#FFFFFF",
  },
  {
    text: "Sketchup",
    backgroundColor: "#0F1420",
    borderRadius: 40,
    textColor: "#FFFFFF",
  },
  {
    text: "Vectorworks",
    backgroundColor: "#0F1420",
    borderRadius: 40,
    textColor: "#FFFFFF",
  },
];
const JobProperties = (props: Props) => {
  return (
    <div className="job-prop-wrapper">
      <div className="job-prop-card">
        <JobPropertiesTitle icon={Skills} text={"Skills"} />
        <div className="job-prop-skills">
          {skills.map((single) => (
            <Tag
              borderRadius={single.borderRadius}
              color={single.backgroundColor}
              text={single.text}
              textColor={single.textColor}
            />
          ))}
        </div>
      </div>
      <div className="job-prop-card">
        <JobPropertiesTitle icon={Experience} text={"Experience"} />
        <p className="job-prop-text">
            Associate 3+
             years
        </p>
      </div>
      <div className="job-prop-card">
        <JobPropertiesTitle icon={Business} text={"Business"} />
        <p className="job-prop-text">
        $55-$65/hour
        </p>
      </div>
      <div className="job-prop-card">
        <JobPropertiesTitle icon={Location} text={"Location"} />
        <p className="job-prop-text" >
        Bozeman, MT 
USA
        </p>
        <div className="job-prop-skills">
        <Tag
              borderRadius={40}
              color={"#FCCDED"}
              text={"On-Site"}
              textColor={"#000000"}
            />
        </div>
       
      </div>
    </div>
  );
};

export default JobProperties;
