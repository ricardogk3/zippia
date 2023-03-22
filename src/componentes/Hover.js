import React, { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { styled } from '@mui/material/styles';
import { Button, IconButton } from '@mui/material';
import { Tooltip,tooltipClasses } from '@mui/material';

// define the maximum size of the hover box
const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 600,
    },
});

// present more data about the job
export default function Hover({ jobDescription, key }) {
    return (
        <div>
            <CustomWidthTooltip title={<div dangerouslySetInnerHTML={{ __html: jobDescription }} />} key={key} placement="right">
                <Button sx={{ m: 1 }}>More</Button>
            </CustomWidthTooltip>
        </div>
    );
}
