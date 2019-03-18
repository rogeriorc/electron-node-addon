# electron-node-addon

**To build the node addons and run, use:**

```bash
npm install
npm run build
npm start
```

**To configure**

Edit in the package.json:

```json
  "config": {
    "generator": {
      "win32": "Visual Studio 14 2015",
      "linux": "Unix Makefiles"
    },
    "runtime": {
      "target": "electron",
      "version": "4.0.8",
      "arch": "x64"
    },
    "addon": "context_aware"
  }

```
* generator: The target generator CMake will use, per platform
* runtime.target: Electron runtime
* runtime.version: Electron version
* runtime.arch: Target architecture
* addon: The addon that will be require()'d



