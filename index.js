#!/usr/bin/env node
"use strict";
const path = require("path");
const commander = require("commander");

const {
    spawn,
    fs: { requireSafe }
} = require("./node_modules/batman-cli/lib/utils");

const APP_PATH = process.cwd();

const pathJoin = path.join.bind();
const className = mainFile => mainFile.replace(/\//g, ".").replace(".java", "");

const njavaConfig = Object.assign(
    {
        bin: "Main.java"
    },
    requireSafe(pathJoin(APP_PATH, "/.njavarc.json"))
);
commander
    .version("1.0.0")
    .option(
        "-i, --init [projectName]",
        "Create a sample node java working project"
    );
commander.on("--help", function () {
    console.log("\n###### Working on IT ######\n");
});
commander.parse(process.argv);

if (commander.init) {
    const projectName = typeof commander.init === "string" ? commander.init : "";
    spawn(
        `cp -r ${pathJoin(__dirname, "example")} ${pathJoin(
            APP_PATH,
            projectName || "example"
        )}`
    );
} else {
    spawn(
        `cd src/main/java/ && javac -d classes ${
        njavaConfig.bin
        } && java -cp classes ${className(njavaConfig.bin)}`
    );
}
