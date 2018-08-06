import React from 'react';
import { render } from 'react-dom';
import ReactWordCloud from 'react-d3-cloud';

const data = [
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
];

const fontSizeMapper = word => Math.log2(word.value) * 20;
const rotate = word => word.value % 360;
const WORD_COUNT_KEY = 'value';
const WORD_KEY = 'word';

const WordCloud = ({wordCount}) => {
    return (
        <ReactWordCloud
            data={wordCount}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
        />)
};

export default WordCloud;
