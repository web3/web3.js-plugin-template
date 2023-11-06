import { Web3, core } from "web3";
import { TemplatePlugin } from "../src";

describe("TemplatePlugin Tests", () => {
  it("should register TemplatePlugin plugin on Web3Context instance", () => {
    const web3Context = new core.Web3Context("http://127.0.0.1:8545");
    web3Context.registerPlugin(new TemplatePlugin());
    expect(web3Context.template).toBeDefined();
  });

  describe("TemplatePlugin method tests", () => {
    let consoleSpy: jest.SpiedFunction<typeof global.console.log>;

    let web3: Web3;

    beforeAll(() => {
      web3 = new Web3("http://127.0.0.1:8545");
      web3.registerPlugin(new TemplatePlugin());
      consoleSpy = jest.spyOn(global.console, "log").mockImplementation();
    });

    afterAll(() => {
      consoleSpy.mockRestore();
    });

    it("should call TempltyPlugin test method with expected param", () => {
      web3.template.test("test-param");
      expect(consoleSpy).toHaveBeenCalledWith("test-param");
    });
  });
});
