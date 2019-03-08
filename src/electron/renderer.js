// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


document.write("TEST!");


/*
We are using Node.js <script>document.write(process.versions.node)</script>,
Chromium <script>document.write(process.versions.chrome)</script>,
and Electron <script>document.write(process.versions.electron)</script>.
*/