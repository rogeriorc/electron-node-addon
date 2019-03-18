#!/usr/bin/env node
'use strict';

const shelljs = require('shelljs'),
    path = require('path'),
    child_process = require('child_process'),
    cmake = require('cmake-cli');

let pkg = require('./package.json'),
    config = pkg.config,
    srcDir = path.join(__dirname, 'src', 'node-addon'),
    targetDir = path.join(__dirname, 'build', 'solution'),
    outputDir = path.join(__dirname, 'build'),
    cmakeJs = path.join(__dirname, 'node_modules', '.bin', 'cmake-js'),
    generator = config.generator[process.platform];

if (process.platform === 'win32') {
    cmakeJs += '.cmd';

    if (config.runtime.arch === 'x64')
        generator += ' Win64';
}

shelljs.mkdir('-p', targetDir);

let args = [
    `configure`,
    `--debug `,
    `--directory=${srcDir}`,
    `--cmake-path=${cmake.path()}`,
    `--generator=${generator}`,
    `--out=${targetDir}`,
    `--runtime=${config.runtime.target}`,
    `--runtime-version=${config.runtime.version}`,
    `--arch=${config.runtime.arch}`,
    `--CDPROJECT_OUTPUT_DIR:STRING=${outputDir}`  
];

child_process.spawnSync(cmakeJs, args, {
    stdio: 'inherit',
    cwd: srcDir
});

args = [
    '--build',
    targetDir,
    '--config',
    'debug'
];

child_process.spawnSync(cmake.path(), args, {
    stdio: 'inherit',
    cwd: srcDir
});
