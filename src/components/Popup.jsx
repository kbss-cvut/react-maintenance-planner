import React from "react"
import moment from "moment"
import ProgressBar from "./ProgressBar";
import PropTypes from "prop-types";

const Popup = ({item, group, progress}) => {
  let dateStart = moment(item.start, 'x');
  let dateEnd = moment(item.end, 'x');

  return (
    <div className="popup">
      <div className="popup-body">
        <h3>{item.title}</h3>
        <div className="item-group"><span style={{fontWeight: 'bold'}}>Group:</span> {group.title}</div>
        <div className="dates">
          <h4>Date</h4>
          <span className="date date-from">
                  From: {dateStart.format('LLL')}
          </span>
          <br/>
          <span className="date date-to">
                  To: {dateEnd.format('LLL')}
          </span>
        </div>
      </div>
        <div>
            <p>
                Task progress: {progress ?
                (progress * 100) + "%"
                :
                "Not defined"}
            </p>
            {<ProgressBar progress={progress}/>}
        </div>
    </div>
  )
}

Popup.protoTypes = {
    item: PropTypes.object.isRequired,
    group: PropTypes.object.isRequired,
}

export default Popup