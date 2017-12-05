"use strict";

const blogFactory = require("./blogFactory");
const events = require("./events");
const domController = require("./dom");

let blogs = blogFactory.blogFactory();
events.activateEvents(blogs);