import { ItemType } from "../../App";
import { DesignItemLink } from "../design/DesignItemLink";

export interface LogicItemLinkProps {
  // In test cases, fruit/vegetable.
  itemType: ItemType;
  // The active item.
  itemName: string;
  // A callback for updating the selected item.
  updateActiveItem: React.Dispatch<React.SetStateAction<string>>;
  // Dispatcher for active item type.
  updateItemType: React.Dispatch<React.SetStateAction<ItemType>>;
  // Reset Table
  resetTable: (itemType: ItemType) => void;
}

export const LogicItemLink = (props: LogicItemLinkProps) => {
  const onItemClick = (
    event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
  ) => {
    props.resetTable(props.itemType);
    props.updateItemType(props.itemType);
    props.updateActiveItem(
      props.itemName.replace(/Unid./g, "").replace(/larva/g, "").trim()
    );
  };
  return DesignItemLink({ itemName: props.itemName, onItemClick });
};
