import { Web3PluginBase } from "web3";
export declare class TemplatePlugin extends Web3PluginBase {
    pluginNamespace: string;
    test(param: string): void;
}
declare module "web3" {
    interface Web3Context {
        template: TemplatePlugin;
    }
}
//# sourceMappingURL=index.d.ts.map