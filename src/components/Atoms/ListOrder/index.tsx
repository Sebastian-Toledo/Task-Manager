import CardOrder from "../CardOrder";
import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";

const ListOrder = () => {
  return (
    <List backgroundColor="red" paddingBottom="2" paddingTop="2">
      <ListItem backgroundColor="gray" alignItems="center" padding="2">
        <CardOrder />
      </ListItem>
      <ListItem backgroundColor="gray" alignItems="center" padding="2">
        <CardOrder />
      </ListItem>
      <ListItem backgroundColor="gray" alignItems="center" padding="2">
        <CardOrder />
      </ListItem>
    </List>
  );
};

export default ListOrder;
