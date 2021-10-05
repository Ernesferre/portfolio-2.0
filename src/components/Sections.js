import React from "react";
import { Box, Button, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom"
import Fade from "react-reveal/Fade";
// import { Link } from "react-scroll"

const Sections = (props) => {
  console.log(props.isDark);

  return (
    <Fade>
      <Box
        w={["95%", "80%"]}
        mx="auto"
        // mb="6rem"
        alignSelf="center"
        bg={props.isDark ? "black" : "white"}
        textAlign="center"
        fontFamily="Amatic SC"
        fontWeight="bold"
      >
        <SimpleGrid
          bg={props.isDark ? "black" : "white"}
          columns={[1, 2, 2, 4]}
          spacing="1rem"
          flexWrap="wrap"
          textAlign="center"
          rounded="lg"
          color="black"
          mt={8}
        >
          <Link
            to="/profile"

            // smooth={true}
            // duration={1000}
          >
            <Button
              boxShadow="md"
              w={["280px", "200px"]}
              p="6"
              rounded="md"
              bg="yellow.600"
              color="black"
              letterSpacing="10px"
              textDecorationLine="none"
              _hover={{ textDecoration: "none" }}
              boxShadow="2xl"
              href="profile"
              _hover={{
                boxShadow: "dark-lg",
              }}
            >
              Profile
            </Button>
          </Link>

          <Link to="/skills">
            <Button
              boxShadow="md"
              w={["280px", "200px"]}
              p="6"
              rounded="md"
              bg="yellow.600"
              color="black"
              letterSpacing="10px"
              textDecorationLine="none"
              _hover={{ textDecoration: "none" }}
              boxShadow="2xl"
              _hover={{
                boxShadow: "dark-lg",
              }}
            >
              Skills
            </Button>
          </Link>

          <Link to="/portfolio">
            <Button
              boxShadow="md"
              w={["280px", "200px"]}
              p="6"
              rounded="md"
              bg="yellow.600"
              color="black"
              letterSpacing="10px"
              textDecorationLine="none"
              _hover={{ textDecoration: "none" }}
              boxShadow="2xl"
              _hover={{
                boxShadow: "dark-lg",
              }}
            >
              Portfolio
            </Button>
          </Link>

          <Link to="/workexperience">
            <Button
              boxShadow="md"
              w={["280px", "200px"]}
              p="6"
              rounded="md"
              bg="yellow.600"
              color="black"
              letterSpacing="6px"
              textDecorationLine="none"
              _hover={{ textDecoration: "none" }}
              boxShadow="2xl"
              _hover={{
                boxShadow: "dark-lg",
              }}
            >
              Work Experience
            </Button>
          </Link>

          <GridItem colSpan={1} colStart={[1, 2]} colEnd={[1, 3]}>
            <Link to="/resume">
              <Button
                boxShadow="md"
                w={["280px", "200px"]}
                p="6"
                rounded="md"
                bg="yellow.600"
                color="black"
                letterSpacing="10px"
                textDecorationLine="none"
                _hover={{ textDecoration: "none" }}
                boxShadow="2xl"
                _hover={{
                  boxShadow: "dark-lg",
                }}
              >
                Resume
              </Button>
            </Link>
          </GridItem>

          <GridItem colSpan={1} colStart={[1, 3]} colEnd={[1, 4]}>
            <Link to="/education">
              <Button
                boxShadow="md"
                w={["280px", "200px"]}
                p="6"
                rounded="md"
                bg="yellow.600"
                color="black"
                letterSpacing="10px"
                textDecorationLine="none"
                _hover={{ textDecoration: "none" }}
                boxShadow="2xl"
                _hover={{
                  boxShadow: "dark-lg",
                }}
              >
                Education
              </Button>
            </Link>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Fade>
  );
};

export default Sections;
