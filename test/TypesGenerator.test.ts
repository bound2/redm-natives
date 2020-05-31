/* eslint-disable  @typescript-eslint/no-explicit-any */
import 'mocha';
import { expect } from 'chai';
import * as nativesJson from './natives.json';

const lineSeparator = require('os').EOL;
const fs = require('fs-extra');

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
        it('uitutorial', () => {
            const ns = "UITUTORIAL";
            moduleDeclaration(ns, "./out/UiTutorial.module.ts");
        });
        it('uistatemachine', () => {
            const ns = "UISTATEMACHINE";
            moduleDeclaration(ns, "./out/UiStateMachine.module.ts");
        });
        it('uilog', () => {
            const ns = "UILOG";
            moduleDeclaration(ns, "./out/UiLog.module.ts");
        });
        it('unlock', () => {
            const ns = "UNLOCK";
            moduleDeclaration(ns, "./out/Unlock.module.ts");
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
        it('namespace29', () => {
            const ns = "_NAMESPACE29";
            moduleDeclaration(ns, "./out/Namespace29.module.ts");
        });
        it('namespace26', () => {
            const ns = "_NAMESPACE26";
            moduleDeclaration(ns, "./out/Namespace26.module.ts");
        });
        it('namespace30', () => {
            const ns = "_NAMESPACE30";
            moduleDeclaration(ns, "./out/Namespace30.module.ts");
        });
        it('namespace4', () => {
            const ns = "_NAMESPACE4";
            moduleDeclaration(ns, "./out/Namespace4.module.ts");
        });
        it('namespace71', () => {
            const ns = "_NAMESPACE71";
            moduleDeclaration(ns, "./out/Namespace71.module.ts");
        });
        it('namespace49', () => {
            const ns = "_NAMESPACE49";
            moduleDeclaration(ns, "./out/Namespace49.module.ts");
        });
        it('namespace73', () => {
            const ns = "_NAMESPACE73";
            moduleDeclaration(ns, "./out/Namespace73.module.ts");
        });
        it('namespace76', () => {
            const ns = "_NAMESPACE76";
            moduleDeclaration(ns, "./out/Namespace76.module.ts");
        });
        it('namespace79', () => {
            const ns = "_NAMESPACE79";
            moduleDeclaration(ns, "./out/Namespace79.module.ts");
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