import React from "react";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Box className="header">
            <Box>
                <Text as={'h1'}>
                    <Link to="/" className="logo">
                        Electronics
                    </Link>
                </Text>
            </Box>
            <Box className="header-links">
                <UnorderedList>
                    <ListItem>
                        <Link to="/">Home</Link>
                    </ListItem>
                </UnorderedList>
                <UnorderedList>
                    <ListItem>
                        <Link to="/login">Log In</Link>
                    </ListItem>
                </UnorderedList>
                <UnorderedList>
                    <ListItem>
                        <Link to="/cart" className="cart">
                            <i className="fas fa-shopping-cart" />
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Box>
    );
}

export default Header;

//* Restart at 9:16