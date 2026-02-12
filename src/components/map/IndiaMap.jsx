import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import statesData from '../../data/states.json';

const IndiaMap = () => {
  const navigate = useNavigate();

  const handleStateClick = (stateId) => {
    navigate(`/state/${stateId}`);
  };

  // Simplified state positions for visual representation
  const statePositions = {
    'rajasthan': { x: 150, y: 200 },
    'punjab': { x: 180, y: 120 },
    'kerala': { x: 200, y: 550 },
    'tamil-nadu': { x: 280, y: 520 },
    'karnataka': { x: 220, y: 470 },
    'maharashtra': { x: 180, y: 350 },
    'west-bengal': { x: 380, y: 320 },
    'goa': { x: 160, y: 420 },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Map Container */}
      <div className="bg-white p-8 rounded-lg shadow-elegant border border-charcoal/10">
        <svg 
          viewBox="0 0 500 700" 
          className="w-full h-auto"
          style={{ maxHeight: '600px' }}
        >
          {/* India Outline (Simplified) */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            d="M 250 50 L 280 80 L 320 100 L 360 140 L 390 180 L 410 230 L 420 280 L 415 330 L 400 380 L 380 420 L 350 460 L 320 490 L 290 520 L 270 560 L 260 600 L 250 640 L 240 600 L 230 560 L 210 520 L 180 490 L 150 460 L 120 420 L 100 380 L 85 330 L 80 280 L 90 230 L 110 180 L 140 140 L 180 100 L 220 80 Z"
            fill="none"
            stroke="#D4A574"
            strokeWidth="2"
          />

          {/* State Markers */}
          {statesData.states.map((state, index) => {
            const position = statePositions[state.id];
            if (!position) return null;

            return (
              <motion.g
                key={state.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => handleStateClick(state.id)}
                className="cursor-pointer group"
              >
                {/* Marker Circle */}
                <circle
                  cx={position.x}
                  cy={position.y}
                  r="8"
                  fill="#FF9933"
                  className="group-hover:fill-[#138808] transition-colors duration-300"
                />
                
                {/* Pulse Effect */}
                <circle
                  cx={position.x}
                  cy={position.y}
                  r="8"
                  fill="#FF9933"
                  className="opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                >
                  <animate
                    attributeName="r"
                    from="8"
                    to="20"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.3"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* State Label */}
                <text
                  x={position.x}
                  y={position.y - 20}
                  textAnchor="middle"
                  fontSize="14"
                  fontFamily="Montserrat, sans-serif"
                  fontWeight="500"
                  fill="#2B2B2B"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                >
                  {state.name}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-charcoal/10">
          <p className="text-sm font-sans text-charcoal/60 text-center mb-4">
            Click on any state to explore its culture and heritage
          </p>
          <div className="flex justify-center items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-saffron"></div>
              <span className="text-xs font-sans text-charcoal/60">State</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green"></div>
              <span className="text-xs font-sans text-charcoal/60">Selected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="body-md text-charcoal/70 italic">
          Hover over state markers to see their names. Click to explore their stories.
        </p>
      </motion.div>
    </div>
  );
};

export default IndiaMap;
