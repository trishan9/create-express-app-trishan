#! /usr/bin/env node

const fs = require("fs");
const { spawn } = require("child_process");
const degit = require("degit");
const args = require("args");

args.option("directory", "The name of the directory to create.").examples([
  {
    usage: "create-express-app-trishan -d my-api",
    description: "Create express api in directory my-api",
  },
]);

const flags = args.parse(process.argv, {
  name: "create-express-app-trishan",
});

import("chalk").then(({ default: chalk }) => {
  function errorLog(message) {
    console.log(chalk.red.bgBlack(message));
  }

  if (!flags.d || flags.d.match(/[<>:"\/\\|?*\x00-\x1F]/)) {
    errorLog(`Error: Missing or Invalid directory name: "${flags.d}"`);
    args.showHelp();
    process.exit(-1);
  }

  if (fs.existsSync(flags.d)) {
    errorLog(`Error: Directory "${flags.d}" already exists.`);
    process.exit(-1);
  }

  const repoName = flags.t
    ? "trishan9/Express-Starter"
    : "trishan9/Express-Starter";

  const emitter = degit(repoName, {
    force: true,
    verbose: true,
  });

  emitter.on("info", (info) => {
    console.log(info.message);
  });

  function runCommand(command, args, options = undefined) {
    const spawned = spawn(command, args, options);

    return new Promise((resolve) => {
      spawned.stdout.on("data", (data) => {
        console.log(chalk.bgBlack.white(data.toString()));
      });

      spawned.stderr.on("data", (data) => {
        errorLog(data.toString());
      });

      spawned.on("close", () => {
        resolve();
      });
    });
  }

  emitter.clone(flags.d).then(() => {
    console.log(chalk.bgBlack.cyan("Done! 🏁"));
    console.log("");
    console.log(chalk.bgBlack.white("To get started:"));
    console.log(chalk.bgBlack.cyan(`cd ${flags.d}`));
    console.log(chalk.bgBlack.cyan("yarn / npm i / pnpm i / bun i"));
    console.log(chalk.bgBlack.cyan("yarn / npm / pnpm / bun run dev"));
  });
});
