# RuntimeGuard
An environment validator for Node.js applications - serving as a "pre-loader" of sorts - to ensure that environment variables are configured, dependencies are installed, and utility versions are satisfied. 

RuntimeGuard is a faithful fork and continuation of Eos, a runtime pre-loader created by [Dannington](https://github.com/Dannnington) for application dependency compliance.

## How do I install RuntimeGuard into my project?
1. Clone the RuntimeGuard repository into your project and rename `src/` to `runtimeguard/`.
   
2. Create a `rg.conf.js` (or another name) file in your project's root directory (an example rg.conf.js is included in this repository for reference and documentation).
   
3. Run `npm install` or `yarn install` in `runtimeguard/`.
   
4. Create an entrypoint file (using any name; e.g. index.js/bootstrapper.js/whatever.js) and add the following content to it:

```js
process.rg_conf_path = __dirname + "/rg.conf.js"; // Replace rg.conf.js with the name of your RuntimeGuard configuration file

require("./runtimeguard").runtime(); // Start RuntimeGuard
```

5. Change `package.json` to point your main file entry to the RuntimeGuard entrypoint.