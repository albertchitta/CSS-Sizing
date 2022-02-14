import React from 'react';
import TypographyRem from '../components/TypographyRem';
import TypographyPx from '../components/TypographyPx';
import TypographyVw from '../components/TypographyVw';

export default function Example2() {
  return (
    <div className="example-2">
      <div className="title-2">Typography - Helvetica Neue</div>
      <div className="title-bar" />
      <TypographyRem />
      <TypographyPx />
      <TypographyVw />
    </div>
  );
}
