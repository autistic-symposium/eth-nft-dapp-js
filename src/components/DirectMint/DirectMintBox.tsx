import React from 'react';
import DirectMint from './DirectMint';

import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import {
  FILMMAKER_DAO_CONTRACT_NETWORK,
  TOKEN_FINDER_URL,
} from '../../utils/Constants';
import { useDevNFTSupply } from '../../hooks/useDevNFTSupply';

// Layout for the Direct Mint Box
// used on the minting page
const DirectMintBox = () => {
  const { t } = useTranslation();
  const { isLoading, remainingPublicSupply, uniqueTokenHolders } =
    useDevNFTSupply();

  return (
    <>
      <Container maxW="container.md" centerContent>
        <Box
          borderWidth="4px"
          borderRadius="lg"
          borderColor="#FFF033"
          w={{ base: '75%', s: '90%' }}
          padding="40"
          color="white"
        >
          <Stack spacing={5} align="center">
            ]
            { FILMMAKER_DAO_CONTRACT_NETWORK === '$rinkeby' && (
              <Badge colorScheme="#FF8D33">{t('testnet')}</Badge>
            )}
            <Heading color="#EE5967" fontSize={{ base: '1.25rem', sm: '2rem' }}>
              {t('mintPageHeader')}
            </Heading>
            <Text fontWeight="bold" ontSize={{ base: '16', sm: '16' }}>
              {'View the available Token IDs'}{' '}
              <Link color="#726EB2" href={'/'} isExternal>
                {t('here')}
              </Link>
            </Text>
            <Text fontWeight="bold" fontSize={{ base: '14', sm: '14' }}>
              {'(You can only mint 1 to 1337)'}{' '}
            </Text>
            <Text fontWeight="bold" fontSize={{ base: '24', sm: '24' }}>
              {t('remainingTokensText', {
                remainingTokens: isLoading
                  ? '...'
                  : remainingPublicSupply.toLocaleString(),
                uniqueAddressCount: isLoading
                  ? '...'
                  : uniqueTokenHolders?.toLocaleString(),
              })}
            </Text>
            <DirectMint />
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default DirectMintBox;
