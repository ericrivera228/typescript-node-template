# Typescript Node Template


#### Running this project

To compile and run this project, execute:
```
npm run build-start
```

To just build, execute:
```
npm run build
```

To run without building, execute:
```
npm run start
```

#### Seeding another project with this template
1. Copy over all files from this project into the new repo, **excluding** the `/build` & `/node_modules` folders.
2. Run `npm i`.
3. Update name in `package.json`.
4. Update REAME.md.

#### To Do
1. It would be nice to use ES modules instead of CommonJS. However this breaks compatibility with older versions of node. This _should_ be fine, especially if running on your local machine where you can control the node version. But this might cause problems if you need to share with other people.