# v2.7.3 snowpack issue

When aliasing a web_module snowpack no-longer generates the web module as a dependency.

`node_modules/.bin/snowpack dev --config snowpack.dev.js --reload`

or

`node_modules/.bin/snowpack build --config snowpack.dev.js --reload`

to reproduce.
