import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

const getPassedTimeText = (lastSeenTime, currentTime) => {
  const seconds = currentTime - lastSeenTime;
  if (seconds > 0 && seconds <= 60) {
    return `${seconds} seconds ago`;
  }
  if (seconds > 60) {
    return `${Math.floor(seconds / 60)} minutes ago`;
  }
  return `0 seconds ago`;
};

function HowManyTime(props) {
  const { lastSeenTime } = props;
  const [currentTimestamp, setCurrentTime] = useState(0);
  const delay = (currentTimestamp - lastSeenTime > 60 ? 60000 : 1000);

  const intervalRef = useRef(() => {
    setCurrentTime(Math.floor(new Date().getTime() / 1000));
  });

  useEffect(() => {
    const intervalId = setInterval(intervalRef.current, delay);
    return () => clearInterval(intervalId);
  }, [delay]);

  return (
    <div>
      <div>{getPassedTimeText(lastSeenTime, currentTimestamp)}</div>
    </div>
  );
}

export default HowManyTime;

HowManyTime.propTypes = {
  lastSeenTime: PropTypes.number.isRequired,
};
