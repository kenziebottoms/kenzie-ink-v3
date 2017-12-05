"use strict";

const factory = require("./blogFactory");
const events = require("./events");
const domController = require("./dom");

let blogs = factory.blogFactory("assets/js/blogs.json");
events.activateEvents(blogs);