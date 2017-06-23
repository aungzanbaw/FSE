"use strict"

// Object cloning
const data = { x: 42, y: 27, label: 'testing' };
const clone = Object.assign({}, data);
const clone2 = {...data};

// Merge two objects 
const defaultSetting = {logWarnings: false, logErrors: false};
const developerSetting = {logErrors: true};
const userSetting = Object.assign({}, defaultSetting, developerSetting);