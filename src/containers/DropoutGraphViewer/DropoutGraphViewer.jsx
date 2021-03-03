import React, { useEffect, useState, useRef } from 'react';
import { BarGraph } from '../../components'
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import NodeMap from '../../assets/nodeMap'
import './style.scss';

const nodeMap = { ...NodeMap }

const DropoutGraphViewer = () => {
  const chooseBranchesRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(chooseBranchesRef, false);
  const [treePaths, setTreePaths] = useState([])
  const [path, setPath] = useState([])
  const handleClickChooseBtn = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    const result = []
    const visit = (node, path) => { 
      if (!nodeMap[node]) {
        return;
      }
      path.push(node);
      if (nodeMap[node].adjList.length === 0) {
        result.push(path.join(' -> '));
      } else {
        nodeMap[node].adjList.forEach(childNode => {
          visit(childNode, path);
        })
      }
      path.pop();
    }
    visit(Object.keys(nodeMap)[0], [])
    setTreePaths([...result])
    setPath([...result[0].split(' -> ')])
  }, [])

  return (
    <div className="container">
      <div className="dropout-graph-viewer">
        <div className="dropout-graph-viewer-header">
          <span className="title">Flow dropout per step and service</span>
          <div className="operations">
            <div>
              <button onClick={() => handleClickChooseBtn()}>Choose branches</button>
              <nav
                ref={chooseBranchesRef}
                className={`menu ${isActive ? "active" : "inactive"}`}
              >
                <ul>
                  {treePaths.map((path) => (
                    <li onClick={() => setPath([...path.split(' -> ')])}>
                      {path.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </nav>
              <button>Setting</button>
            </div>

          </div>
        </div>
        <div className="dropout-graph-viewer-body">
          {path.length > 0 && path.map((item) => (
            <React.Fragment key={item}>
              <BarGraph data={nodeMap[item]} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropoutGraphViewer;
