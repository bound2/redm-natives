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
    return `export declare function ${g.funcName}(${g.funcParamString}): ${g.returnTypesString};`;
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
            return p.type.endsWith("*") && p.type !== "char*" && p.type !== "void*";
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

    fs.removeSync(filepath);
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
        it('crew', () => {
            const ns = "CREW";
            moduleDeclaration(ns, "./out/Crew.module.ts");
        });
        it('datafile', () => {
            const ns = "DATAFILE";
            moduleDeclaration(ns, "./out/Datafile.module.ts");
        });
        it('decorator', () => {
            const ns = "DECORATOR";
            moduleDeclaration(ns, "./out/Decorator.module.ts");
        });
        it('debug', () => {
            const ns = "DEBUG";
            moduleDeclaration(ns, "./out/Debug.module.ts");
        });
        it('dlc', () => {
            const ns = "DLC";
            moduleDeclaration(ns, "./out/Dlc.module.ts");
        });
        it('entity', () => {
            const ns = "ENTITY";
            moduleDeclaration(ns, "./out/Entity.module.ts");
        });
        it('event', () => {
            const ns = "EVENT";
            moduleDeclaration(ns, "./out/Event.module.ts");
        });
        it('fire', () => {
            const ns = "FIRE";
            moduleDeclaration(ns, "./out/Fire.module.ts");
        });
        it('gang', () => {
            const ns = "GANG";
            moduleDeclaration(ns, "./out/Gang.module.ts");
        });
        it('googleanalytics', () => {
            const ns = "GOOGLE_ANALYTICS";
            moduleDeclaration(ns, "./out/GoogleAnalytics.module.ts");
        });
        it('flock', () => {
            const ns = "FLOCK";
            moduleDeclaration(ns, "./out/Flock.module.ts");
        });
        it('graphics', () => {
            const ns = "GRAPHICS";
            moduleDeclaration(ns, "./out/Graphics.module.ts");
        });
        it('inventory', () => {
            const ns = "INVENTORY";
            moduleDeclaration(ns, "./out/Inventory.module.ts");
        });
        it('hud', () => {
            const ns = "HUD";
            moduleDeclaration(ns, "./out/Hud.module.ts");
        });
        it('interior', () => {
            const ns = "INTERIOR";
            moduleDeclaration(ns, "./out/Interior.module.ts");
        });
        it('itemdatabase', () => {
            const ns = "ITEMDATABASE";
            moduleDeclaration(ns, "./out/ItemDatabase.module.ts");
        });
        it('itemset', () => {
            const ns = "ITEMSET";
            moduleDeclaration(ns, "./out/ItemSet.module.ts");
        });
        it('law', () => {
            const ns = "LAW";
            moduleDeclaration(ns, "./out/Law.module.ts");
        });
        it('localization', () => {
            const ns = "LOCALIZATION";
            moduleDeclaration(ns, "./out/Localization.module.ts");
        });
        it('map', () => {
            const ns = "MAP";
            moduleDeclaration(ns, "./out/Map.module.ts");
        });
        it('missiondata', () => {
            const ns = "MISSIONDATA";
            moduleDeclaration(ns, "./out/MissionData.module.ts");
        });
        it('minigame', () => {
            const ns = "MINIGAME";
            moduleDeclaration(ns, "./out/Minigame.module.ts");
        });
        it('misc', () => {
            const ns = "MISC";
            moduleDeclaration(ns, "./out/Misc.module.ts");
        });
        it('money', () => {
            const ns = "MONEY";
            moduleDeclaration(ns, "./out/Money.module.ts");
        });
        it('netshopping', () => {
            const ns = "NETSHOPPING";
            moduleDeclaration(ns, "./out/Netshopping.module.ts");
        });
        it('network', () => {
            const ns = "NETWORK";
            moduleDeclaration(ns, "./out/Network.module.ts");
        });
        it('persistence', () => {
            const ns = "PERSISTENCE";
            moduleDeclaration(ns, "./out/Persistence.module.ts");
        });
        it('object', () => {
            const ns = "OBJECT";
            moduleDeclaration(ns, "./out/Object.module.ts");
        });
        it('pathfind', () => {
            const ns = "PATHFIND";
            moduleDeclaration(ns, "./out/Pathfind.module.ts");
        });
        it('pad', () => {
            const ns = "PAD";
            moduleDeclaration(ns, "./out/Pad.module.ts");
        });
        it('perschar', () => {
            const ns = "PERSCHAR";
            moduleDeclaration(ns, "./out/Perschar.module.ts");
        });
        it('physics', () => {
            const ns = "PHYSICS";
            moduleDeclaration(ns, "./out/Physics.module.ts");
        });
        it('player', () => {
            const ns = "PLAYER";
            moduleDeclaration(ns, "./out/Player.module.ts");
        });
        it('population', () => {
            const ns = "POPULATION";
            moduleDeclaration(ns, "./out/Population.module.ts");
        });
        it('ped', () => {
            const ns = "PED";
            moduleDeclaration(ns, "./out/Ped.module.ts");
        });
        it('posse', () => {
            const ns = "POSSE";
            moduleDeclaration(ns, "./out/Posse.module.ts");
        });
        it('propset', () => {
            const ns = "PROPSET";
            moduleDeclaration(ns, "./out/PropSet.module.ts");
        });
        it('queue', () => {
            const ns = "QUEUE";
            moduleDeclaration(ns, "./out/Queue.module.ts");
        });
        it('recording', () => {
            const ns = "RECORDING";
            moduleDeclaration(ns, "./out/Recording.module.ts");
        });
        it('save', () => {
            const ns = "SAVE";
            moduleDeclaration(ns, "./out/Save.module.ts");
        });
        it('replay', () => {
            const ns = "REPLAY";
            moduleDeclaration(ns, "./out/Replay.module.ts");
        });
        it('socialclub', () => {
            const ns = "SOCIALCLUB";
            moduleDeclaration(ns, "./out/SocialClub.module.ts");
        });
        it('scripts', () => {
            const ns = "SCRIPTS";
            moduleDeclaration(ns, "./out/Scripts.module.ts");
        });
        it('shapetest', () => {
            const ns = "SHAPETEST";
            moduleDeclaration(ns, "./out/ShapeTest.module.ts");
        });
        it('socialclubfeed', () => {
            const ns = "SOCIALCLUBFEED";
            moduleDeclaration(ns, "./out/SocialClubFeed.module.ts");
        });
        it('spactionproxy', () => {
            const ns = "SPACTIONPROXY";
            moduleDeclaration(ns, "./out/SpactionProxy.module.ts");
        });
        it('stats', () => {
            const ns = "STATS";
            moduleDeclaration(ns, "./out/Stats.module.ts");
        });
        it('streaming', () => {
            const ns = "STREAMING";
            moduleDeclaration(ns, "./out/Streaming.module.ts");
        });
        it('telemetry', () => {
            const ns = "TELEMETRY";
            moduleDeclaration(ns, "./out/Telemetry.module.ts");
        });
        it('txd', () => {
            const ns = "TXD";
            moduleDeclaration(ns, "./out/Txd.module.ts");
        });
        it('uiapps', () => {
            const ns = "UIAPPS";
            moduleDeclaration(ns, "./out/UiApps.module.ts");
        });
        it('task', () => {
            const ns = "TASK";
            moduleDeclaration(ns, "./out/Task.module.ts");
        });
        it('uievents', () => {
            const ns = "UIEVENTS";
            moduleDeclaration(ns, "./out/UiEvents.module.ts");
        });
        it('uifeed', () => {
            const ns = "UIFEED";
            moduleDeclaration(ns, "./out/UiFeed.module.ts");
        });
        it('uitutorial', () => {
            const ns = "UITUTORIAL";
            moduleDeclaration(ns, "./out/UiTutorial.module.ts");
        });
        it('uistatemachine', () => {
            const ns = "UISTATEMACHINE";
            moduleDeclaration(ns, "./out/UiStateMachine.module.ts");
        });
        it('uipinning', () => {
            const ns = "UIPINNING";
            moduleDeclaration(ns, "./out/UiPinning.module.ts");
        });
        it('uilog', () => {
            const ns = "UILOG";
            moduleDeclaration(ns, "./out/UiLog.module.ts");
        });
        it('unlock', () => {
            const ns = "UNLOCK";
            moduleDeclaration(ns, "./out/Unlock.module.ts");
        });
        it('voice', () => {
            const ns = "VOICE";
            moduleDeclaration(ns, "./out/Voice.module.ts");
        });
        it('volume', () => {
            const ns = "VOLUME";
            moduleDeclaration(ns, "./out/Volume.module.ts");
        });
        it('water', () => {
            const ns = "WATER";
            moduleDeclaration(ns, "./out/Water.module.ts");
        });
        it('vehicle', () => {
            const ns = "VEHICLE";
            moduleDeclaration(ns, "./out/Vehicle.module.ts");
        });
        it('weapon', () => {
            const ns = "WEAPON";
            moduleDeclaration(ns, "./out/Weapon.module.ts");
        });
        it('zone', () => {
            const ns = "ZONE";
            moduleDeclaration(ns, "./out/Zone.module.ts");
        });
        it('ik', () => {
            const ns = "IK";
            moduleDeclaration(ns, "./out/Ik.module.ts");
        });
        it('namespace30', () => {
            const ns = "_NAMESPACE30";
            moduleDeclaration(ns, "./out/Namespace30.module.ts");
        });
        it('namespace4', () => {
            const ns = "_NAMESPACE4";
            moduleDeclaration(ns, "./out/Namespace4.module.ts");
        });
        it('namespace70', () => {
            const ns = "_NAMESPACE70";
            moduleDeclaration(ns, "./out/Namespace70.module.ts");
        });
        it('uistickyfeed', () => {
            const ns = "UISTICKYFEED";
            moduleDeclaration(ns, "./out/UiStickyFeed.module.ts");
        });
    }
);
