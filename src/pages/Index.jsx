import React from 'react';
import { Box, Container, Flex, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react';

const Index = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      {/* Header */}
      <Box as="header" py={4} textAlign="center">
        <Heading as="h1" size="2xl" fontWeight="bold">
          BAKLA MEDYA
        </Heading>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" flex="1">
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} my={8}>
          {/* Left Column - Image */}
          <Box>
            <Image
              src="/placeholder.svg"
              alt="Night sky with mountains and lake"
              objectFit="cover"
              w="100%"
              h={{ base: '300px', md: '100%' }}
            />
          </Box>

          {/* Right Column - Categories */}
          <Flex alignItems="center">
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">HOŞ GELDİNİZ</Text>
              <Text>• Son Dakika</Text>
              <Text>• Haberler</Text>
              <Text>• Gündem</Text>
              <Text>• Siyaset</Text>
              <Text>• Teknoloji</Text>
              <Text>• Bilim</Text>
              <Text>• Sanat</Text>
              <Text>• Spor</Text>
            </VStack>
          </Flex>
        </Grid>
      </Container>

      {/* Marquee */}
      <Box
        overflow="hidden"
        whiteSpace="nowrap"
        py={2}
        bg="gray.100"
      >
        <Box
          animation="marquee 20s linear infinite"
          display="inline-block"
        >
          Facebook Instagram X Facebook Instagram X Facebook Instagram X
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" py={4} px={8} bg="gray.200">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'center', md: 'flex-start' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text fontSize="sm">
            TELİF HAKKI © 2024 BAKLA MEDYA - TÜM HAKLARI SAKLIDIR.
          </Text>
          <Text fontSize="sm" mt={{ base: 2, md: 0 }}>
            POWERED BY GODADDY
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;