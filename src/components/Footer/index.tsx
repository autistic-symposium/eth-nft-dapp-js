import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, HStack, chakra, VStack } from '@chakra-ui/react';
import {
  IconOpenSea,
  IconEtherscan,
  IconTwitter,
  IconDiscord,
  IconGitHub,
  IconDiscourse,
} from '../Icons';
import {
  FILMMAKER_DAO_CONTRACT,
  ETHER_SCAN_LINK_PREFIX,
  OPENSEA_COLLECTION_LINK,
} from '../../utils/Constants';

function Footer() {
  const { t } = useTranslation();

  return (
    <chakra.footer
      backgroundColor="black"
      borderTop="4px solid"
      borderColor="#33FF8D"
      py={10}
    >
      <VStack mx="auto" maxW="6xl" px={4} spacing={1}>
        <Text fontSize="10" color="#726EB2" fontWeight="bold">
          {
            'This collection was written by Mia Stein (DeveloperDAO #2247) for the FilmmakerDAO community.'
          }
        </Text>
        <Text fontSize="10" color="#726EB2" fontWeight="bold">
          {'This page was forked from the original DeveloperDAO project.'}
        </Text>
      </VStack>
    </chakra.footer>
  );
}

export default Footer;
