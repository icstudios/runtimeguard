const path = require("path");
const RuntimeSchema = require("./src/lib/structures/conf");
module.exports = new RuntimeSchema({
    schema: "2.0.1", // The schema version of the configuration.
    name: "RuntimeGuard Example", // The name of the application running under RuntimeGuard
    version: "1.0.0", // The version of the application
    manifest: path.join(__dirname + "/package.json"), // The location of the application's manifest (usually package.json)
    dependentFiles: [ // Paths to files that are required by the application to run
        path.join(__dirname + "/src/runtimeguard1.js"),
        path.join(__dirname + "/src/runtimeguard2.js"),
        path.join(__dirname + "/src/runtimeguard3.js")
    ],
    runtimeOptions: { // Options that are passed to RuntimeGuard, usually to enable or disable settings like ESM
        esm: false
    },
    runApp: async function (rg) { // A JavaScript function that will run the application.
        rg.load(path.join(__dirname + "/src/runtimeguard1.js")); // Load a file. This is nearly the same as running require(), however
    }
});