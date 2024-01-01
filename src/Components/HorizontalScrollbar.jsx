import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import 'react-horizontal-scrolling-menu/dist/styles.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BodyPart from './BodyPart';


const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => (
    <>
        <h2>Scroll for more  <ArrowForwardIcon /></h2><br /><br />
        <ScrollMenu >
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
                </Box>
            ))}
        </ScrollMenu>
    </>
);

export default HorizontalScrollbar;