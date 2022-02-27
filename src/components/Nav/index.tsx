import React from 'react';
import { chakra, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { IconGitHub } from '../Icons';

function Nav() {
  const { t } = useTranslation();

  return (
    <chakra.nav
      backgroundColor="black"
      borderBottom="4px solid"
      borderColor="#FF8D33"
    >
      <Flex
        justify="space-between"
        align="center"
        fontWeight="bold"
        fontSize="sm"
        color="black"
        transition="color 300ms ease-in-out"
        mx="auto"
        maxW="7xl"
        minW="xl"
        py={3}
        px={5}
      >
        <Link href="http://filmmakerdao.com/" passHref>
          <HStack
            as="a"
            title={t('Storytelling Card by FilmmakerDAO')}
            display="flex"
            alignItems="center"
          >
            <chakra.span
              fontWeight="bold"
              fontSize="20"
              color="#33FF8D"
              transition="color 300ms ease-in-out"
              _hover={{ color: '#FF8D33' }}
            >
              {t('Back to FilmmakerDAO')}
            </chakra.span>
          </HStack>
        </Link>

        <HStack spacing={{ base: 3, sm: 10 }}>
          <Link href="/" passHref>
            <chakra.span
              fontWeight="bold"
              fontSize="14"
              color="#FF33D4"
              transition="color 300ms ease-in-out"
              _hover={{ color: '#726EB2' }}
            >
              {t('Search a Storytelling Card ID')}
            </chakra.span>
          </Link>
          <Link href="/mint" passHref>
            <chakra.span
              fontWeight="bold"
              fontSize="14"
              color="#33E0FF"
              transition="color 300ms ease-in-out"
              _hover={{ color: '#726EB2' }}
            >
              {t('mintTokenText')}
            </chakra.span>
          </Link>
        </HStack>
      </Flex>
    </chakra.nav>
  );
}

export default Nav;
