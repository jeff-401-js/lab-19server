'use strict';

require('dotenv').config();

const Q = require('@nmq/q/server');

Q.start();

const file = new Q('files');
file.monitorEvent('save');
file.monitorEvent('error');

const db = new Q('database');