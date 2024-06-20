/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/order, @typescript-eslint/no-var-requires
const prompts = require("prompts");
const { spawnSync } = require("child_process");

const packageAll = [
  {
    title: "story book starter",
    command: "npm run storybook",
  },
  {
    title: "story book starter next",
    command: "npm run storybook --prefix ./.storybookNext",
  },
];

const suggest = (input, choices) => Promise.resolve(choices.filter((i) => i.title.includes(input)));

(async () => {
  const response = await prompts({
    type: "autocomplete",
    name: "project",

    message: "Which project to start?",
    suggest,
    choices: [
      ...packageAll.map((p) => ({
        title: p.title,
        value: { pkg: p.title, command: p.command },
      })),
    ],
  });

  spawnSync("npm exec -- ", [response.project.command], {
    stdio: "inherit",
    shell: true,
  });
})();
