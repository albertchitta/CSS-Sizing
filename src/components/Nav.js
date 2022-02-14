import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      <div className="link1">
        <Link to="/example1">
          Example1
        </Link>
      </div>
      <div />
      <div className="link2">
        <Link to="/example2">
          Example2
        </Link>
      </div>
    </div>
  );
}
