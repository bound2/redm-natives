/* eslint-disable  @typescript-eslint/no-explicit-any */
import 'mocha';
import { expect } from 'chai';
import * as nativesJson from './natives.json'

describe('Namespace71 module',
    () => {
        const ns = "_NAMESPACE71";
        const nsJson = nativesJson[ns];
        const nsFns = Object.keys(nsJson);
        console.log(nsJson);
        for (const fn of nsFns) {
            // Construct native function name that's invokable from JS
            let name = nsJson[fn].name;
            if (name) {
                const camelcaseName = name.split("_").filter((p) => p).map((p) => capitalize(p)).reduce((a, b) => a + b);
                name = camelcaseName;
            } else {
                name = `N_${nsJson[fn]["hash"]}`;
            }
            console.log(name);

            // Gather returnable parameters
            const params: Array<Parameter> = nsJson[fn]["params"];
            const returnParams: Array<string> = params
                .filter((p) => p.type.endsWith("\*"))
                .map((p) => p.type.substring(0, p.type.length - 1))
                .map((p) => type(p));
            const returns: Array<string> = [type(nsJson[fn].results)].concat(returnParams);

            // Gather function parameters
            const fnParams: Array<string> = params.filter((p) => !p.type.endsWith("\*")).map((p) => `${p.name}: ${type(p.type)}`);
            const paramString: string = fnParams.join(", ");
            console.log(returns);
            console.log(paramString);
        }
    }
);

interface Parameter {

    name: string;
    type: string;
    description: string;
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
        default:
            return t;
    }
}