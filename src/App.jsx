import  { useState } from 'react';

const BgColorChanger = () => {
  // Array of 10 predefined colors
  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3',
    '#33FFF3', '#8A33FF', '#FF338A', '#FFD133', '#33FF9A'
  ];

  // State to keep track of the current background color
  const [bgColor, setBgColor] = useState('#FFFFFF');

  // Function to change the background color
  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh',width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Click a Color to Change Background</h1>
      <div style={{ display: 'flex', gap: '30px' }}>
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => changeBackgroundColor(color)}
            style={{
              backgroundColor: color,
              width: '50px',
              height: '50px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BgColorChanger;

