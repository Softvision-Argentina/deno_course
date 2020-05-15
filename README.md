# Deno Course

This small project has been created in order to test some Deno features,
and some basic concepts and relevant matters related to runtime.

---

## Table of Contents

- [Getting started](#getting-started)
- [Source code structure](#source-code-structure)
- [Custom modules](#custom-modules)
- [Project's Wiki](#projects-wiki)

### Getting started

Basically [Deno](https://deno.land/ "Deno's Official Website") must be installed on your OS.
Then clone the repo from Github:

```shell
git clone git@github.com:Softvision-Argentina/deno_course.git
```

### Source code structure

The project has two main directories, _mds_ is the directory where all the custom modules are located,
and _experiments_ is the directory for all the tests/experiments with Deno.

```markdown
deno_course/
└── mds/
└── experiments/
```

### Custom modules

All the feature modules must be located within the `mds/` directory,
each feature must be located in its respective directory named with the feature name,
in order to emulate a module version, a subdirectory must be created for each sub-version, e.g:

- For the _math_ feature, its respective module is located in a _math_ subdirectory within `mds/`.
- Each sub-version is represented within a subdirectory, one for each version, e.g: `0.0.1/`, `1.0.0/`, etc.

```markdown
deno_course/
└── mds/
└── math/
└── 0.0.1/
│ └── mod.ts
└── 1.0.0/
└── mod.ts
```

Once the feature has been added and pushed to the GitHub repo,
the test case script must use its respective module importing its public URL, e.g:

- For the _math_ feature, its respective test case script is located in the `tests` subdirectory.
- The test case script must be named with the feature name, e.g: `math.ts`.
- The test case script must import the feature via public URL, e.g:

```typescript
import { add } from 'https://softvision-argentina.github.io/deno_course/mds/math/0.0.1/mod.ts';
...
```

---

### Project's Wiki

All the technical documentation related to each experiment and/or module has been moved to the [Wiki](https://github.com/Softvision-Argentina/deno_course/wiki "Project's Wiki").

---

Find out more on [Deno Official Website](https://deno.land/ "Deno's Official Website").
