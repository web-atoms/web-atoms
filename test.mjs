import { readdir } from "fs/promises";
import path from "path";

const results = [];

class TestRunner {

    /**
     * 
     * @param {string} name
     */
    static async runTest(name, thisParam) {
        const moduleExports = await import(name);
        const { default: d } = moduleExports;
        if (typeof d !== "function") {
            return;
        }
        if (Function.prototype.toString.call(d).startsWith("class ")) {
            return;
        }
        try {

            const r = d.call(thisParam);
            if (r?.then) {
                await r;
            }
            results.push({ name });
        } catch (error) {
            results.unshift({ name, error });
        }
    }

    static async runAll(dir, db) {
        const items = await readdir(dir, { withFileTypes: true });
        const tasks = [];
        for (const iterator of items) {
            const next = dir + "/" +  iterator.name;
            if (iterator.isDirectory()) {
                tasks.push(this.runAll(next, db));
                continue;
            }
            if (iterator.name.endsWith(".js")) {
                tasks.push(this.runTest(next, { }));
            }
        }
        await Promise.all(tasks);
    }

}

await TestRunner.runAll( "./dist/tests");

let exitCode = 0;
let failed = 0;

for (const { error, name } of results) {
    if (error) {
        exitCode = 1;
        failed++;
        console.error(`${name} failed`);
        console.error(error?.stack ?? error);
        continue;
    }
    console.log(`${name} executed.`);
}

if (exitCode === 0) {
    console.log(`${results.length} tests ran successfully.`);
} else {
    console.log(`${failed} Tests out of ${results.length} failed.`);
}

process.exit(exitCode);