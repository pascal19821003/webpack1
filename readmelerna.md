## 1. npx lerna init --packages="packages/\*"


## tsc 

    "typescript": "~4.8.4",

    https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## copyfiles

    package.json 
        scripts:

            "copy-config": "copyfiles -f ../../.config/component-metadata.json src",
