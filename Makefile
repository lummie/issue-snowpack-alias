MAKEFLAGS += --silent

.PHONY:  dev build



dev:
	node_modules/.bin/snowpack dev --config snowpack.dev.js 

build:
	node_modules/.bin/snowpack build --config snowpack.dev.js 
