import React from 'react'
import styled from '@emotion/styled'
import { Flex, Box, Text, Link } from '@chakra-ui/core'
import { Submit } from './Submit'

const PDF = styled.object`
  width: 100%;
  height: 100%;
`

export const Statement = ({ metadata }) => {
  return (
    <Flex direction={['column', 'row']}>
      <Flex mt={4} mx={[4, 0]} flex="2 1 50%" direction="column" minH="750px">
        <Box height="100%">
          <PDF
            data={`https://beta-programming-in-th.s3-ap-southeast-1.amazonaws.com/${metadata?.id}.pdf`}
          >
            <Text>
              Your browser doesn't support embed PDF viewer please{' '}
              <Link
                isExternal
                href={`https://beta-programming-in-th.s3-ap-southeast-1.amazonaws.com/${metadata?.id}.pdf`}
                rel="noopener noreferrer"
                target="_blank"
                color="teal.600"
              >
                download Statement
              </Link>
            </Text>
          </PDF>
        </Box>
      </Flex>

      <Flex mt={4} mx={[4, 0]} flex="2 1 50%" direction="column" minH="750px">
        <Submit problemID={metadata.id}></Submit>
      </Flex>
    </Flex>
  )
}