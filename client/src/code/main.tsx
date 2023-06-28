import "normalize.css";
import "../css/main.css";
import React from "react";
import {createRoot, Root} from "react-dom/client";
import BaseLayout from "./components/BaseLayout";
import * as IMAP from "./IMAP";
import * as Contacts from "./Contacts";
import {getState} from "./state";

const baseComponent: Root = createRoot(document.getElementById("mainContainer")!);
baseComponent.render(<BaseLayout/>);

const intervalFunction = function(): void {
    if (getState() == null) {
        setTimeout(intervalFunction,100);
    } else {
        startupFunction();
    }
}
intervalFunction();

const startupFunction = function(): void {
    getState().showHidePleaseWait(true);
    async function getMailboxes(): Promise<any> {
        const imapWorker: IMAP.Worker = new IMAP.Worker();
        const mailboxes: IMAP.IMailbox[] = await imapWorker.listMailboxes();
        mailboxes.forEach((inMailbox) => {
            getState().addMailboxToList(inMailbox);
        });
    }
    getMailboxes().then(function(): void {
        async function getContacts() {
            const contactsWorker: Contacts.Worker = new Contacts.Worker();
            const contacts: Contacts.IContact[] = await contactsWorker.listContacts();
            contacts.forEach((inContact) => {
                getState().addContactToList(inContact);
            });
        }
        getContacts().then(() => getState().showHidePleaseWait(false));
    });
}