import React from 'react';
import { Box, Container, Heading, VStack, HStack, Text, Image, List, ListItem, ListIcon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Index = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Container maxW="container.xl" flex="1">
        <Heading as="h1" size="2xl" textAlign="center" my={8}>
          BAKLA MEDYA
        </Heading>

        <Box display={{ base: 'block', md: 'flex' }} alignItems="center" mb={8}>
          <Box flex="1" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
            <Image src="/placeholder.svg" alt="Night sky with mountains" objectFit="cover" w="100%" h="auto" />
          </Box>
          <Box flex="1">
            <Heading as="h2" size="md" mb={4}>
              HOŞ GELDİNİZ
            </Heading>
            <List spacing={3}>
              {['Son Dakika Haberler', 'Gündem', 'Siyaset', 'Teknoloji', 'Bilim', 'Sanat', 'Spor'].map((item) => (
                <ListItem key={item}>
                  <ListIcon as={ChevronRightIcon} color="green.500" />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>

      <Box
        as="marquee"
        bg="gray.100"
        py={2}
        whiteSpace="nowrap"
        overflow="hidden"
      >
        <Text fontSize="sm" fontWeight="bold">
          Facebook Instagram X Facebook Instagram X Facebook Instagram X
        </Text>
      </Box>

      <Box as="footer" bg="gray.200" py={4}>
        <Container maxW="container.xl">
          <HStack justifyContent="space-between" flexWrap="wrap">
            <Text fontSize="sm">
              TELİF HAKKI © 2024 BAKLA MEDYA - TÜM HAKLARI SAKLIDIR.
            </Text>
            <Text fontSize="sm">POWERED BY GODADDY</Text>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;