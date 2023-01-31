import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import { ReactText } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import Routes from "../../../Router/Routes";

interface NavItemProps extends FlexProps {
  icon?: IconType;
  to: Routes;
  children: ReactText;
}
const NavItem = ({ to, icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      to={`${to}`}
      style={{ fontWeight: "bold", textDecoration: "none" }}
      //_focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
