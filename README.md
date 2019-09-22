Deno Tests
==========

This small project has been created in order to test some Deno features, and some basic concepts and relevant matters related to runtime.

---

## Getting started

### Software installed on your system:

#### Requirements

- [Deno](https://deno.land/ "Deno's Official Website")

### Setup

Clone the repo from Github. Since this project has some submodules used to perform all the necessary tests, the `git clone` command must be performed using the `--recurse-submodules` flag, e.g:

```shell
git clone --recurse-submodules git@github.com:vihuvac/deno-tests.git
```

After cloning the repo and its submodules, sometimes the submodules branches may be changed due to some updates, so in order to start working in the respective branch, we might run:

```shell
git submodule foreach 'git checkout master'
```

### Start everything up

#### Module inclusions

All the testing modules must be located within the `vihuvac.github.io` directory, each feature must be located in its respective directory named with the feature name, e.g:

* For the _logger feature_, the main module is located in a _logger sub-directory_ within `vihuvac.github.io`.

```markdown
deno-tests/
└── vihuvac.github.io/
    └── logger/
    ├── logger_v1.ts
    └── logger_v2.ts
```

Once the feature has been added and pushed within the submodule, the new script using this module must import it using its public URL, e.g:

* The _logger.ts_ script imports the _logger_ feature from its public URL.

```typescript
import { logger } from 'https://vihuvac.github.io/logger/logger_v1.ts';
...
```
