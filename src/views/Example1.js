import React from 'react';
import Button from '../components/Button';
import OffButton from '../components/OffButton';

export default function Example1() {
  return (
    <div className="example-1">
      <div className="glass">
        <div className="title-1">Lavatory</div>
        <div className="buttons-1">
          <OffButton />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}
