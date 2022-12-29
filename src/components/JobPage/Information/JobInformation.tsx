import "./JobInformation.css";
import Job from "../../../assets/job1.png";
import Image from "../../ImageContainer/Image";
import Tag from "../../Tag/Tag";
import NavigationIcon from "../../NavigationIcon/NavigationIcon";
import Bookmark from "../../../assets/bookmark.svg";
import Share from "../../../assets/share.svg";
import Button from "../../Button/Button";
type Props = {};

const jobTags = [
  {
    text: "Architecture",
    backgroundColor: "#0F1420",
    borderRadius: 40,
    textColor: "#FFFFFF",
  },
  {
    text: "Freelance",
    backgroundColor: "#E7FFCD",
    borderRadius: 40,
    textColor: "#000000",
  },
  {
    text: "Long-Term",
    backgroundColor: "#CCE6FF",
    borderRadius: 40,
    textColor: "#000000",
  },
];
const JobInformation = (props: Props) => {
  return (
    <div className="job-info-wrapper">
      <div className="job-info-left-section">
        <div className="job-info-top">
          <div className="job-info-img">
            <Image imgSrc={Job} />
          </div>
          <div className="job-info-title">
            <p className="job-info-name">Architectural Designer</p>
            <p className="job-info-place">Black Mountain Architecture</p>
            <p className="job-info-date"> Posted 07/27/2022</p>
          </div>
        </div>
        <div className="job-info-tags">
          {jobTags.map((single) => (
            <Tag
              borderRadius={single.borderRadius}
              color={single.backgroundColor}
              text={single.text}
              textColor={single.textColor}
            />
          ))}
        </div>
      </div>
      <div className="job-info-right-section">
        <div className="job-info-icons-wrapper">
          <NavigationIcon iconSrc={Share} />
          <NavigationIcon iconSrc={Bookmark} />
        </div>
        <div className="job-info-status">
          <p className="job-info-status-text">Status: Accepting Applications</p>
        </div>
        <div className="job-info-apply-button-wrapper">
          <Button
            fontColor="#FFFFFF"
            text="Apply on Archslate"
            color="linear-gradient(86.54deg, #F26A5C 7.4%, #F29C6B 115.84%)"
          />
        </div>
      </div>
    </div>
  );
};

export default JobInformation;
