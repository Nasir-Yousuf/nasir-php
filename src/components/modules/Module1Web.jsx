import React from 'react';
import { Chapter1View } from '../chapters/chapter1/Chapter1View';

export function Module1Web({ onNextModule }) {
  return <Chapter1View onNextChapter={onNextModule} />;
}
export default Module1Web;
