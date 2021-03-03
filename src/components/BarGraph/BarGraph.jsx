import React, { useEffect, useState } from 'react';
import { object } from 'prop-types'
import './style.scss';

const BarGraph = ({ data }) => {
  const [graphData, setGraphData] = useState({})

  useEffect(() => {
    setGraphData(data)
  }, [data])

  return (
    <div className="bar-graph">
      <div className="bar-graph-item">
        <div
          className={graphData.type === 'BASIC' ? 'basic-graph' : 'service-graph'}
          style={{ height: `${graphData.value}%` }}
        >
          <span>{graphData.label}</span>
        </div>
      </div>
      <span className="bar-graph-percent">
        {`${graphData.value}%`}
      </span>
    </div>
  );
};

BarGraph.propTypes = {
  data: object
}

export default React.memo(BarGraph);
