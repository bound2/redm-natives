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
            let name = nsJson[fn].name;
            if (name) {
                const camelcaseName = name.split("_").filter((p) => p).map((p) => capitalize(p)).reduce((a, b) => a + b);
                name = camelcaseName;
            } else {
                name = `N_${nsJson[fn]["hash"]}`;
            }
            console.log(name);
        }
    }
);

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}