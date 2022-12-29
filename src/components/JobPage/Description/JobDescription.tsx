import Button from "../../Button/Button";
import Tag from "../../Tag/Tag";
import "./JobDescription.css";
import Message from "../../../assets/message.svg";
import User from "../../../assets/john.png";
import Image from "../../ImageContainer/Image";
import JobActions from "../Actions/JobActions";
type Props = {};

const JobDescription = (props: Props) => {
  return (
    <div className="job-desc-wrapper">
      <div className="job-details-wrapper">
        <p className="job-desc-section-title"> About this role</p>
        <p className="job-desc-section-text">
          Short overview about job and the way that the candidate would fit into
          the company. Can also include extra instructions for the application
          process if any exist.
        </p>
        <p className="job-desc-section-title ">Responsibilities</p>

        <li className="job-desc-section-text">specific day to day tasks</li>
        <li className="job-desc-section-text">deliverables</li>
        <li className="job-desc-section-text">work environment requirements</li>
        <li className="job-desc-section-text">role within the current team</li>
        <li className="job-desc-section-text">etc.</li>

        <p className="job-desc-section-title ">Skills</p>
        <li className="job-desc-section-text">software skills</li>
        <li className="job-desc-section-text">technical skills</li>
        <li className="job-desc-section-text">soft skills</li>
        <li className="job-desc-section-text">other</li>

        <p className="job-desc-section-title ">Qualifications</p>
        <p className="job-desc-section-text" style={{marginBottom: "15px"}}>Required</p>
        <li className="job-desc-section-text">education </li>
        <li className="job-desc-section-text">licenses and certifications</li>
        <li className="job-desc-section-text">experience needed </li>

        <p className="job-desc-section-text" style={{margin: "15px 0px"}}>Bonus</p>
        <li className="job-desc-section-text">education </li>
        <li className="job-desc-section-text">licenses and certifications</li>
        <li className="job-desc-section-text">experience needed </li>
        <p className="job-desc-section-title ">Rate</p>
        <li className="job-desc-section-text">if available</li>
        
        <p className="job-desc-section-title ">Time Estimate</p>
        <li className="job-desc-section-text">if applicable</li>

        <p className="job-desc-section-title ">Work Authorization</p>
        <li className="job-desc-section-text">tbd</li>

        <p className="job-desc-section-title ">About Company</p>
        <p className="job-desc-section-text">
        Description of company with any uniform info or disclaimers - equal hiring opportunity, etc.
        </p>
        <JobActions />
      </div>
      <div className="job-poster-wrapper">
        <p className="job-poster-title">Job Poster</p>
        <div className="job-poster-info">
          <div className="job-poster-image">
            <Image imgSrc={User} />
          </div>
          <div className="job-poster-details">
            <p className="job-poster-name">John Carlos</p>
            <p className="job-poster-designation">Project Manager</p>
          </div>
        </div>
        <Button
          color="#0F1420"
          fontColor="#FFFFFF"
          text="Message"
          startIcon={Message}
        />
      </div>
    </div>
  );
};

export default JobDescription;
