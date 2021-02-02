#!/bin/bash
npm init -y
npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-private-methods @babel/plugin-proposal-class-properties fs glob
npx webpack
npx webpack serve
