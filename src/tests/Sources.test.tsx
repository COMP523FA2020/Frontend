import { ItemType } from "../App";
import { DesignSources } from "../components/design/DesignSources";
import { LogicSources } from "../components/logic/LogicSources";

test("LogicSource is calling designSource", () => {
    const mockLogicSources = jest.fn(LogicSources);
    mockLogicSources.mockReturnValueOnce(DesignSources({sources:[]}))
    let res = mockLogicSources({ activeItem: "test", itemType:ItemType.PREY});
    let expected = DesignSources({ sources:[]});
    expect(res).toEqual(expected);
});