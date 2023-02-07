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
    <Link to={`${to}`} style={{ fontWeight: "bold", textDecoration: "none" }}>
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="lg"
        role="group"
        textAlign="center"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
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
