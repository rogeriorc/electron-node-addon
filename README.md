# electron-node-addon

**To build the node addons use:**

```bash
npm install
npm run build
```

**To run the example requiring the addon on _src/node-addon/hello_world_**

```bash
npm run hello-world
```

**To run the example requiring the addon on _src/node-addon/context_aware**

```bash
npm run context-aware
```


**To configure**

Edit in the package.json:

```json
  "devDependencies": {
    ...
    "electron": "4.1.0"
  },
  "config": {
    "generator": {
      "win32": "Visual Studio 14 2015",
      "linux": "Unix Makefiles"
    },
    "runtime": {
      "target": "electron",
      "version": "4.1.0",
      "arch": "x64"
    }
  }

```
* devDependencies.electron: Electron version

* config.generator: The target generator CMake will use, per platform

* config.runtime.target: Electron runtime

* config.runtime.version: Electron version

* config.runtime.arch: Target architecture

After change the _devDependencies.electron_ and _config.runtime.version_, reinstall and rebuild:

```bash
npm install
npm run build
```