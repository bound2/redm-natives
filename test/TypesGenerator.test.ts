import 'mocha';
import { assert } from 'chai';
import * as nativesJson from './natives.json';

import { EOL } from 'os';
import * as fs from 'fs-extra';

const reservedKeywords: Array<string> = [
    'break',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'export',
    'extends',
    'finally',
    'for',
    'function',
    'if',
    'import',
    'in',
    'instanceof',
    'new',
    'return',
    'super',
    'switch',
    'this',
    'throw',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield',
    'let'
];

interface Parameter {

    name: string;
    type: string;
    description: string;
}

interface Generatable {

    funcName: string;
    funcParamString: string;
    returnTypesString: string;
}

function toDeclaration(g: Generatable): string {
    return `declare function ${g.funcName}(${g.funcParamString}): ${g.returnTypesString};`;
}

function capitalize(s: string): string {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function safeVarName(s: string): string {
    if (reservedKeywords.includes(s)) {
        return `a${capitalize(s)}`;
    }
    if (s === "...") {
        return `${s}args`;
    }
    return s;
}

function type(t: string): string {
    if (t.endsWith("*")) {
        t = t.slice(0, -1);
    }
    switch (t) {
        case "":
            return "any[]";
        case "Any":
            return "any";
        case "BOOL":
            return "boolean";
        case "int":
        case "float":
        case "Vehicle":
        case "Entity":
        case "Ped":
        case "ScrHandle":
        case "Cam":
        case "Player":
        case "FireId":
        case "Blip":
        case "Pickup":
        case "AnimScene":
        case "Volume":
        case "Prompt":
        case "Interior":
        case "ItemSet":
        case "PropSet":
        case "PersChar":
        case "PopZone":
            return "number";
        case "char":
        case "const char":
            return "string";
        case "Hash":
            return "string | number";
        case "Object":
            return "Record<string, any>";
        case "long":
            return "bigint";
        case "Vector3":
            return "[number, number, number]";
        default:
            return t;
    }
}

function moduleDeclaration(ns: string, filepath: string): void {
    const nsJson = nativesJson[ns];
    const nsFns = Object.keys(nsJson);

    const hashNatives: Array<Generatable> = new Array<Generatable>();
    const namedNatives: Array<Generatable> = new Array<Generatable>();
    for (const fn of nsFns) {
        // Construct native function name that's invokable from JS
        let name: string = nsJson[fn].name;
        const hashNative = name.startsWith("_0x");
        if (hashNative) {
            name = `N_${fn.toLowerCase()}`;
        } else {
            name = name.split("_")
                .filter((p: string) => p)
                .map((p: string) => capitalize(p))
                .reduce((a: string, b: string) => a + b);
        }

        const rFn = (p: Parameter): boolean => {
            return p.type.endsWith("*") && p.type !== "const char*" && p.type !== "void*";
        };
        // Gather returnable parameters
        const params: Array<Parameter> = nsJson[fn]["params"];
        const returnParams: Array<string> = params
            .filter((p) => rFn(p))
            .map((p) => type(p.type));
        let returnTypes: Array<string> = [type(nsJson[fn].return_type)].concat(returnParams);
        // Fix issue where sometimes it has return type marked as void but has references returned
        if (returnTypes.length > 1) {
            returnTypes = returnTypes.filter((r) => r !== "void");
        }

        let returnTypesString: string;
        if (returnTypes.length > 1) {
            returnTypesString = `[${returnTypes.join(", ")}]`;
        } else {
            returnTypesString = returnTypes[0];
        }

        // Gather function parameters
        const fnParams: Array<string> = params
            .filter((p) => !rFn(p))
            .map((p) => `${safeVarName(p.name)}: ${type(p.type)}`);
        const paramString: string = fnParams.join(", ");

        const gen: Generatable = {
            funcName: name,
            funcParamString: paramString,
            returnTypesString: returnTypesString
        };
        if (hashNative) {
            hashNatives.push(gen);
        } else {
            namedNatives.push(gen);
        }
    }

    //fs.removeSync(filepath);
    const writeFn = (s: string): void => {
        fs.outputFileSync(filepath, s + EOL, { flag: "a+" });
    };
    writeFn("// Named functions");
    namedNatives.sort((a, b) => a.funcName.localeCompare(b.funcName)).forEach((n) => writeFn(toDeclaration(n)));
    writeFn("// Hash functions");
    hashNatives.sort((a, b) => a.funcName.localeCompare(b.funcName)).forEach((n) => writeFn(toDeclaration(n)));
}

describe('Modules',
    () => {
        it("count", () => {
            const nsModules = Object.keys(nativesJson);
            console.debug(nsModules.sort((a: string, b: string) => a.localeCompare(b)));
            assert.equal(nsModules.length, 86);
        });
    }
);

describe('Module declaration generator',
    () => {
        it('aitransport', () => {
            const ns = "AITRANSPORT";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('aicoverpoint', () => {
            const ns = "AICOVERPOINT";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('animscene', () => {
            const ns = "ANIMSCENE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('bounty', () => {
            const ns = "BOUNTY";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('audio', () => {
            const ns = "AUDIO";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('attribute', () => {
            const ns = "ATTRIBUTE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('brain', () => {
            const ns = "BRAIN";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('builtin', () => {
            const ns = "BUILTIN";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('clock', () => {
            const ns = "CLOCK";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('cam', () => {
            const ns = "CAM";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('collection', () => {
            const ns = "COLLECTION";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('compapp', () => {
            const ns = "COMPAPP";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('companion', () => {
            const ns = "COMPANION";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('compendium', () => {
            const ns = "COMPENDIUM";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('crashlog', () => {
            const ns = "CRASHLOG";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('databinding', () => {
            const ns = "DATABINDING";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('crew', () => {
            const ns = "CREW";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('datafile', () => {
            const ns = "DATAFILE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('decorator', () => {
            const ns = "DECORATOR";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('debug', () => {
            const ns = "DEBUG";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('dlc', () => {
            const ns = "DLC";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('entity', () => {
            const ns = "ENTITY";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('event', () => {
            const ns = "EVENT";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('fire', () => {
            const ns = "FIRE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('gang', () => {
            const ns = "GANG";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('googleanalytics', () => {
            const ns = "GOOGLE_ANALYTICS";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('flock', () => {
            const ns = "FLOCK";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('graphics', () => {
            const ns = "GRAPHICS";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('inventory', () => {
            const ns = "INVENTORY";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('hud', () => {
            const ns = "HUD";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('interior', () => {
            const ns = "INTERIOR";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('itemdatabase', () => {
            const ns = "ITEMDATABASE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('itemset', () => {
            const ns = "ITEMSET";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('law', () => {
            const ns = "LAW";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('localization', () => {
            const ns = "LOCALIZATION";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('map', () => {
            const ns = "MAP";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('missiondata', () => {
            const ns = "MISSIONDATA";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('minigame', () => {
            const ns = "MINIGAME";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('misc', () => {
            const ns = "MISC";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('money', () => {
            const ns = "MONEY";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('netshopping', () => {
            const ns = "NETSHOPPING";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('network', () => {
            const ns = "NETWORK";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('persistence', () => {
            const ns = "PERSISTENCE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('object', () => {
            const ns = "OBJECT";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('pathfind', () => {
            const ns = "PATHFIND";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('pad', () => {
            const ns = "PAD";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('perschar', () => {
            const ns = "PERSCHAR";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('physics', () => {
            const ns = "PHYSICS";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('player', () => {
            const ns = "PLAYER";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('population', () => {
            const ns = "POPULATION";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('ped', () => {
            const ns = "PED";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('posse', () => {
            const ns = "POSSE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('propset', () => {
            const ns = "PROPSET";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('queue', () => {
            const ns = "QUEUE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('recording', () => {
            const ns = "RECORDING";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('save', () => {
            const ns = "SAVE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('replay', () => {
            const ns = "REPLAY";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('socialclub', () => {
            const ns = "SOCIALCLUB";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('scripts', () => {
            const ns = "SCRIPTS";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('shapetest', () => {
            const ns = "SHAPETEST";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('socialclubfeed', () => {
            const ns = "SOCIALCLUBFEED";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('spactionproxy', () => {
            const ns = "SPACTIONPROXY";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('stats', () => {
            const ns = "STATS";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('streaming', () => {
            const ns = "STREAMING";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('telemetry', () => {
            const ns = "TELEMETRY";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('txd', () => {
            const ns = "TXD";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('uiapps', () => {
            const ns = "UIAPPS";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('task', () => {
            const ns = "TASK";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('uievents', () => {
            const ns = "UIEVENTS";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('uifeed', () => {
            const ns = "UIFEED";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('uitutorial', () => {
            const ns = "UITUTORIAL";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('uistatemachine', () => {
            const ns = "UISTATEMACHINE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('uipinning', () => {
            const ns = "UIPINNING";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('uilog', () => {
            const ns = "UILOG";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('unlock', () => {
            const ns = "UNLOCK";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('voice', () => {
            const ns = "VOICE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('volume', () => {
            const ns = "VOLUME";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('water', () => {
            const ns = "WATER";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('vehicle', () => {
            const ns = "VEHICLE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('weapon', () => {
            const ns = "WEAPON";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('zone', () => {
            const ns = "ZONE";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('ik', () => {
            const ns = "IK";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('namespace30', () => {
            const ns = "_NAMESPACE30";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('namespace4', () => {
            const ns = "_NAMESPACE4";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('uidebug', () => {
            const ns = "UIDEBUG";
            moduleDeclaration(ns, "./out/index.ts");
        });
        it('uistickyfeed', () => {
            const ns = "UISTICKYFEED";
            moduleDeclaration(ns, "./out/index.ts");
        });
    }
);
