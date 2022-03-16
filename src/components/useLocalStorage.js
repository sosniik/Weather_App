import React, {useEffect, useState} from "react";

export function getLocalStorage(){
    return JSON.parse(localStorage.getItem("City"))
}

