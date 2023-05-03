import { useState, useCallback, useMemo, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { STATE_DATA, STATE_LENGTH, STATE_LEVEL_FILLS } from '../utils/constant';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { levelArrayToString, levelStringToArray } from '../utils/levelConverter';

import INDIA_TOPO_JSON from '../india.topo.json';
import LevelMenu from './LevelMenu';

const PROJECTION_CONFIG = {
  scale: 460,
  center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
};


const geographyStyle = {
  default: {
    outline: 'none'
  },
  hover: {
    fill: '#ccc',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
};


function IndianMap() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [data, setData] = useState(STATE_DATA);
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const [selectedStateName, setSelectedStateName] = useState('');
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuVisible, setMenuVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState('');
  const [stateLevels, setStateLevels] = useState(
    new Array(STATE_LENGTH).fill(0)
  );

  const onMouseEnter = (geo) => {
    return () => {
      setTooltipContent(`${geo.properties.name}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };

  const handleStateClick = (event) => {
    const offsetY =
      event.target.getBoundingClientRect().y + 210 - window.innerHeight < 0
        ? 0
        : event.target.getBoundingClientRect().y + 210 - window.innerHeight;
    const offsetX =
      event.target.getBoundingClientRect().x + 200 - window.innerWidth < 0
        ? 0
        : event.target.getBoundingClientRect().x + 200 - window.innerWidth;
    setSelectedStateIndex(event.target.getAttribute("index"));
    setMenuPosition({
      x: event.target.getBoundingClientRect().x + window.pageXOffset - offsetX,
      y: event.target.getBoundingClientRect().y + window.pageYOffset - offsetY,
    });
    setSelectedStateName(event.target.getAttribute("name"));
    setMenuVisible(true);
  };

  useEffect(() => {
    const levelStrFromURL = searchParams.get('levels');
    const levelArr = levelStringToArray(levelStrFromURL);
    setStateLevels(levelArr);
  }, []);

  useEffect(() => {
    const levelStr = levelArrayToString(stateLevels);
    navigate(`/map?levels=${levelStr}`);
  }, [stateLevels]);

  const handleLevelClick = useCallback(
    (event) => {
      const newLevel = event.target.getAttribute('level');

      const index = parseInt(selectedStateIndex);
      setStateLevels((prevStateLevels) => {
        const clonePrevLevels = [...prevStateLevels];
        clonePrevLevels[index] = parseInt(newLevel);
        return clonePrevLevels;
      });

      setMenuVisible(false);
    },
    [selectedStateIndex]
  );

  const handleOutsideClick = () => {
    setMenuVisible(false);
  };

  const totalLevel = useMemo(() => {
    return stateLevels.reduce((a, v) => a + v, 0);
  }, [stateLevels]);

  return (
    <>
      <section >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg574"
          version="1.1"
          viewBox="0 0 840 750"
          xmlSpace="preserve"
        >
          <g id="Background">
            <path
              id="rect11351"
              fill="#9dc3fb"
              fillOpacity="1"
              strokeWidth="0.75"
              d="M-1.031 1.031H841.288V1223.7849999999999H-1.031z"
              onClick={(event) => handleOutsideClick(event)}
            ></path>
          </g>
          <ComposableMap
            projectionConfig={PROJECTION_CONFIG}
            projection="geoMercator"
            width={300}
            height={200}
            x="-140"
            data-tip=""

          >
            <Geographies geography={INDIA_TOPO_JSON}>
              {({ geographies }) =>
                geographies.map((geo, stateIndex) => {
                  const current = data.find((s) => s.id === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      index={stateIndex}
                      name={current?.state}
                      geography={geo}
                      fill={STATE_LEVEL_FILLS[stateLevels[stateIndex]] ?? "#FFF"}
                      stroke="#000000"
                      strokeWidth="0.2"
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo)}
                      onMouseLeave={onMouseLeave}
                      data-tooltip-id="state-tooltip"
                      onClick={handleStateClick}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="svg574"
            version="1.1"
            width={600}
            viewBox="0 0 840 400"
            x="250"
            y="-250"
            xmlSpace="preserve">
            <g
              id="g1953"
              strokeDasharray="none"
              strokeDashoffset="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeOpacity="1"
              paintOrder="markers fill stroke"
              transform="matrix(1.63481 0 0 1.6089 -381.296 -140.998)"
            >
              <rect
                id="rect385"
                width="176.299"
                height="132.998"
                x="544.363"
                y="159.803"
                fill="#fff"
                stroke="#000"
                strokeWidth="1.5"
                display="inline"
                ry="6.754"
              ></rect>
              <rect
                id="rect1963"
                width="25.835"
                height="17.926"
                x="530.263"
                y="145.262"
                fill="#e84c3d"
                fillOpacity="1"
                stroke="#000"
                strokeWidth="0.525"
                ry="4.118"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
              ></rect>
              <rect
                id="rect1963-1"
                width="25.835"
                height="17.926"
                x="530.263"
                y="175.262"
                fill="#d58337"
                fillOpacity="1"
                stroke="#000"
                strokeWidth="0.525"
                ry="4.118"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
              ></rect>
              <rect
                id="rect1963-1-2"
                width="25.835"
                height="17.926"
                x="530.263"
                y="205.262"
                fill="#f3c218"
                fillOpacity="1"
                stroke="#000"
                strokeWidth="0.525"
                ry="4.118"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
              ></rect>
              <rect
                id="rect1963-3"
                width="25.835"
                height="17.926"
                x="530.676"
                y="235.262"
                fill="#30cc70"
                fillOpacity="1"
                stroke="#000"
                strokeWidth="0.525"
                ry="4.118"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
              ></rect>
              <rect
                id="rect1963-1-8"
                width="25.835"
                height="17.926"
                x="530.676"
                y="265.263"
                fill="#3598db"
                fillOpacity="1"
                stroke="#000"
                strokeWidth="0.525"
                ry="4.118"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
              ></rect>
              <rect
                id="rect1963-1-2-1"
                width="25.835"
                height="17.926"
                x="530.676"
                y="295.263"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                ry="4.118"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
              ></rect>
              <text
                id="text2045-3-8"
                x="723.828"
                y="189.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-4-6"
                  x="723.828"
                  y="189.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Level: 4
                </tspan>
              </text>
              <text
                id="text2045-3-8-4"
                x="723.828"
                y="159.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-4-6-1"
                  x="723.828"
                  y="159.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Level: 5
                </tspan>
              </text>
              <text
                id="text2045-3-7"
                x="723.828"
                y="219.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-4-1"
                  x="723.828"
                  y="219.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Level: 3
                </tspan>
              </text>
              <text
                id="text2045-3-84"
                x="723.828"
                y="249.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-4-9"
                  x="723.828"
                  y="249.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Level: 2
                </tspan>
              </text>
              <text
                id="text2045-3-73"
                x="723.828"
                y="279.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-4-10"
                  x="723.828"
                  y="279.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Level: 1
                </tspan>
              </text>
              <text
                id="text2045-3-2"
                x="723.828"
                y="309.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-4-3"
                  x="723.828"
                  y="309.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Level: 0
                </tspan>
              </text>
              <text
                id="text2045-5"
                x="569.215"
                y="189.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-8"
                  x="569.215"
                  y="189.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Stayed there
                </tspan>
              </text>
              <text
                id="text2045-5-9"
                x="569.215"
                y="159.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-8-2"
                  x="569.215"
                  y="159.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Lived there
                </tspan>
              </text>
              <text
                id="text2045-2"
                x="569.848"
                y="219.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-9"
                  x="569.848"
                  y="219.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Visited there
                </tspan>
              </text>
              <text
                id="text2045-8"
                x="569.848"
                y="249.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-2"
                  x="569.848"
                  y="249.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Alighted there
                </tspan>
              </text>
              <text
                id="text2045-0"
                x="568.828"
                y="279.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-7"
                  x="568.828"
                  y="279.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Passed there
                </tspan>
              </text>
              <text
                id="text2045-4"
                x="568.828"
                y="309.117"
                fill="#fff"
                stroke="#000"
                strokeWidth="0.525"
                fontSize="16"
                transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                xmlSpace="preserve"
              >
                <tspan
                  id="tspan2047-85"
                  x="568.828"
                  y="309.117"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeWidth="0.75"
                  fontSize="16"
                >
                  Never been there
                </tspan>
              </text>
              <text
                xmlSpace="preserve"
                style={{ WebkitTextAlign: "center", textAlign: "center" }}
                id="text3282"
                x="637.208"
                y="147.041"
                fill="#000"
                fillOpacity="1"
                stroke="none"
                strokeWidth="0.462"
                fontSize="20"
                textAnchor="middle"
                transform="scale(.99204 1.00802)"
              >
                <tspan
                  id="tspan3280"
                  style={{ WebkitTextAlign: "center", textAlign: "center" }}
                  x="637.208"
                  y="147.041"
                  strokeWidth="0.462"
                  textAnchor="middle"
                >
                  India Travel Level {totalLevel}
                </tspan>
              </text>
            </g>
          </svg>
        </svg>
        <Tooltip id='state-tooltip' content={tooltipContent} />
        {menuVisible && (<LevelMenu menuPosition={menuPosition} handleLevelClick={handleLevelClick} selectedStateName={selectedStateName} />)}
      </section>
    </>
  )
}

export default IndianMap
