import React, { useState } from 'react';

function Name() {
  const [name, setName] = useState('Wendell');
  return <div className="name">{name}</div>;
}

export default Name;
