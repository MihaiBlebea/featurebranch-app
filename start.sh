#! /bin/bash

eval 'mongod'
eval  'cd client && npm start'
eval  'cd server && npm run watch'
