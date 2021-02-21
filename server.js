"use strict";

let express = require("express");

let app = epress();

require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log("the app is working");
})