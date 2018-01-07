import { Sound } from "./Sound";
export declare class PeekModuleFactory {
    /**
     * Provide a cross platform Browser module
     */
    static readonly FormsModules: any[];
    /**
     * Provide a cross platform Router module
     */
    static readonly RouterModule: any;
    /**
     * Create a new sound object, that can be played.
     */
    static createSound(soundFilePath: string): Sound;
}
