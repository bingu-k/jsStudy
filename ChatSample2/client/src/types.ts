import React from "react";

export interface Message {
    name :string,
    text :string
};

export type InputEvent = React.FormEvent<HTMLFormElement>;

export const SERVER_PORT :number = 2222;

export const SOCKET_EVENT = {
    JOIN: "JOIN",
    DOSCONNECT: "disconnect",
    CHANGE_NICKNAME: "CHANGE_NICKNAME",
    SEND: "SEND",
    RECEIVE: "RECEIVE"
}