import { Box, Flex, Image, Text, Button, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import styles from "../styles/navbar.module.css";
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box position={"sticky"} top={"0"} zIndex={"1"}
            background="#fff" h="80px" w="100%" px={4} boxShadow={"0 2px 5px 0 #E2E4F6"} boxSizing='border-box'>
            <Flex align="center" justify="space-between" h="100%" w="100%" >
                <Flex align="center" h={"100%"} w="20%">
                    <Image src="https://www.transportsimple.com/redesign/images/logo.png" alt="Logo" h="100%" w="100%" mr={4} />
                </Flex>

                {/* Hamburger Icon for mobile */}
                <Box display={{ base: 'block', md: 'none' }}>
                    <IconButton
                        icon={<HamburgerIcon />}
                        variant="ghost"
                        onClick={onToggle}
                        aria-label="Toggle Navigation"
                    />
                </Box>
                <Flex align="center" w="50%" justifyContent={"space-evenly"} fontSize={"20px"}  display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}>
                    <Text className={styles.set_nav_items}>Home</Text>
                    <Text className={styles.set_nav_items}>Feature</Text>
                    <Text className={styles.set_nav_items}>Industry</Text>
                    <Text className={styles.set_nav_items}>About</Text>
                    <Text className={styles.set_nav_items}>Contact Us</Text>
                </Flex>

                <Flex align="center" >
                    <Button colorScheme="blue">Get Demo</Button>
                </Flex>
            </Flex>
        </Box>
    );
};

const NavItem = ({ children }) => {
    return (
        <Text px={2} fontWeight="medium" color="gray.700" display={{ base: 'none', md: 'block' }}>
            {children}
        </Text>
    );
};

export default Navbar;
