/* eslint-disable  @typescript-eslint/no-explicit-any */
import 'mocha';
import { expect } from 'chai';
import * as nativesJson from './natives.json';

const lineSeparator = require('os').EOL;
const fs = require('fs-extra');

describe('Module declaration generator',
    () => {
        it('namespace71', () => {
            const ns = "_NAMESPACE71";
            moduleDeclaration(ns, "./out/Namespace71.module.ts");
        });
        it('aitransport', () => {
            const ns = "AITRANSPORT";
            moduleDeclaration(ns, "./out/AiTransport.module.ts");
        });
        it('aicoverpoint', () => {
            const ns = "AICOVERPOINT";
            moduleDeclaration(ns, "./out/AiCoverpoint.module.ts");
        });
        it('animscene', () => {
            const ns = "ANIMSCENE";
            moduleDeclaration(ns, "./out/Animscene.module.ts");
        });
        it('bounty', () => {
            const ns = "BOUNTY";
            moduleDeclaration(ns, "./out/Bounty.module.ts");
        });
        it('audio', () => {
            const ns = "AUDIO";
            moduleDeclaration(ns, "./out/Audio.module.ts");
        });
        it('attribute', () => {
            const ns = "ATTRIBUTE";
            moduleDeclaration(ns, "./out/Attribute.module.ts");
        });
        it('brain', () => {
            const ns = "BRAIN";
            moduleDeclaration(ns, "./out/Brain.module.ts");
        });
        it('builtin', () => {
            const ns = "BUILTIN";
            moduleDeclaration(ns, "./out/Builtin.module.ts");
        });
        it('clock', () => {
            const ns = "CLOCK";
            moduleDeclaration(ns, "./out/Clock.module.ts");
        });
        it('cam', () => {
            const ns = "CAM";
            moduleDeclaration(ns, "./out/Cam.module.ts");
        });
        it('collection', () => {
            const ns = "COLLECTION";
            moduleDeclaration(ns, "./out/Collection.module.ts");
        });
        it('compapp', () => {
            const ns = "COMPAPP";
            moduleDeclaration(ns, "./out/CompApp.module.ts");
        });
        it('companion', () => {
            const ns = "COMPANION";
            moduleDeclaration(ns, "./out/Companion.module.ts");
        });
        it('compendium', () => {
            const ns = "COMPENDIUM";
            moduleDeclaration(ns, "./out/Compendium.module.ts");
        });
        it('crashlog', () => {
            const ns = "CRASHLOG";
            moduleDeclaration(ns, "./out/CrashLog.module.ts");
        });
        it('databinding', () => {
            const ns = "DATABINDING";
            moduleDeclaration(ns, "./out/Databinding.module.ts");
        });
    }
);

interface Parameter {

    name: string;
    type: string;
    description: string;
}

interface Generatable {

    funcName: string;
    funcParamString: string;
    returnParamString: string;
}

function moduleDeclaration(ns: string, filepath: string): void {
    const nsJson = nativesJson[ns];
    const nsFns = Object.keys(nsJson);

    let hashNatives: Array<Generatable> = new Array();
    let namedNatives: Array<Generatable> = new Array();
    for (const fn of nsFns) {
        // Construct native function name that's invokable from JS
        let name = nsJson[fn].name;
        const hashNative: boolean = !name;
        if (hashNative) {
            name = `N_${nsJson[fn]["hash"].toLowerCase()}`;
        } else {
            name = name.split("_").filter((p) => p).map((p) => capitalize(p)).reduce((a, b) => a + b);
        }

        // Gather returnable parameters
        const params: Array<Parameter> = nsJson[fn]["params"];
        const returnParams: Array<string> = params
            .filter((p) => p.type.endsWith("\*"))
            .map((p) => p.type.substring(0, p.type.length - 1))
            .map((p) => type(p));
        const returns: Array<string> = [type(nsJson[fn].results)].concat(returnParams);
        let returnsString: string;
        if (returns.length > 1) {
            returnsString = `[${returns.join(", ")}]`;
        } else {
            returnsString = returns[0];
        }

        // Gather function parameters
        const fnParams: Array<string> = params.filter((p) => !p.type.endsWith("\*")).map((p) => `${p.name}: ${type(p.type)}`);
        const paramString: string = fnParams.join(", ");

        const gen: Generatable = {
            funcName: name,
            funcParamString: paramString,
            returnParamString: returnsString
        };
        if (hashNative) {
            hashNatives.push(gen);
        } else {
            namedNatives.push(gen);
        }
    }

    fs.removeSync(filepath);
    const writeFn = (s: string) => {
        fs.outputFileSync(filepath, s + lineSeparator, { flag: "a+" });
    };
    writeFn("// Named functions");
    namedNatives.sort((a, b) => a.funcName.localeCompare(b.funcName)).forEach((n) => writeFn(toDeclaration(n)));
    writeFn("// Hash functions");
    hashNatives.sort((a, b) => a.funcName.localeCompare(b.funcName)).forEach((n) => writeFn(toDeclaration(n)));
}

function toDeclaration(g: Generatable): string {
    return `declare function ${g.funcName}(${g.funcParamString}): ${g.returnParamString};`;
}

function capitalize(s: string): string {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function type(t: string): string {
    switch (t) {
        case "Any":
            return "any";
        case "BOOL":
            return "boolean";
        case "int":
            return "number";
        default:
            return t;
    }
}