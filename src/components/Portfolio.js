import { Box, Heading, HStack, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";
import { Proyectos } from "./Proyectos";
import Zoom from "react-reveal/Zoom";
import GoBack from "./GoBack";
import Title from "./Title";

const Portfolio = (props) => {
  console.log(Proyectos[0].descripcion);

  const { isDark } = props;

  console.log(isDark);

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <GoBack />
        </GridItem>

        <GridItem
          colSpan={1}
          colStart={[2, 3]}
          colEnd={[3, 4]}
          //   textAlign="center"
        >
          <Title title={"Portfolio"} />
        </GridItem>
      </Grid>

      <Zoom>
        <Box
          textAlign="center"
          mt="4rem"
          bg={props.isDark ? "black" : "white"}
          id="portfolio"
        >
          <Flex flexWrap="wrap" mt="3rem" justifyContent="center">
            {Proyectos.map((item) => (
              <Flex>
                <Zoom>
                  <Card isDark={isDark} key={item.id} {...item} />
                </Zoom>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Zoom>
    </>
  );
};

export default Portfolio;
