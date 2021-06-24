[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# Lerna Repo Template

My lerna mono-repo template

<!-- toc -->

- [Usage](#usage)
- [Features](#features)
- [Dev Tools](#dev-tools)

<!-- tocstop -->

## Usage 

```
git clone git@github.com:bingtimren/lerna-repo-template.git
mv lerna-repo-template name-of-new-repo
cd name-of-new-repo
rm -fr .git
git init .
```

Review the files, make appropriate changes, then create first commit.

## Features

- uses zero-config "opinionated tools"
- upon git commit:
  - build changed & affected projects
  - test changed & affected projects
  - lint & format staged Typescript, Javascript, JSON sources
  - update Markdown (.md) file's Topic of Content (marked by `<!-- tpc -->`)
  - check dependency (depcheck) of changed & affected projects
  - prepare and enforce commit message in conventional format
- uses 'op-tscdoc' to compile Typescript codes and API documents
- uses 'op-jest' to run tests written in Typescript
- by default publishes to local registry (verdaccio)



## Dev Tools




