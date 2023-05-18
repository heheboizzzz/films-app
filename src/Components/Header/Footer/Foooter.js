import React from 'react';

export default function Footer() {
  const divStyle = {
    backgroundColor: '#BB0000',
    padding: '10px',
    marginTop: '5px',
  };

  const pStyle = {
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    borderWidth: '10px',
  };

  return (
    <div style={divStyle} className='font-serif'>
      <p style={pStyle}><i className="tiny material-icons">©2023 MARVEL</i></p>
    </div>
  );
}
