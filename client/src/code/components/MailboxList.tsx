import React from "react";
import { Chip, List } from "@mui/material";

const MailboxList = ({state}): JSX.Element => (
    <List>
        {state.mailboxes.map(value => {
            return (
                <Chip label={`${value.name}`} onClick={() => state.setCurrentMailbox(value.path)}
                style={{width:128, marginBottom:10}} color={state.currentMailbox === value.path ? "secondary" : "primary"}/>
            );
        })}
    </List>
);

export default MailboxList;