import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';
import * as tf from "@tensorflow/tfjs";
import { ImHappy, ImNeutral, ImSad } from 'react-icons/im';

const padSequences = (sequences, metadata) => {
    return sequences.map(sequence => {
        if (sequence.length < metadata.max_len) {
            const pad = [];
            for (let i = 0; i < metadata.max_len - sequence.length; ++i) {
                pad.push(0);
            }
            sequence = pad.concat(sequence);
        }
        else if (sequence.length > metadata.max_len) {
            sequence.splice(0, sequence.length - metadata.max_len);
        }
        return sequence;
    });
}

const predict = (text, model, metadata) => {
    const splitText = text.trim().toLowerCase().replace(/(\.|\,|\!)/g, '').split(' ');
    const sequence = splitText.map(word => {
    if (typeof metadata.word_index === 'undefined') {
        return 2;
    }
    else {
        return metadata.word_index[word] + metadata.index_from;
    }
    });
    const paddedSequence = padSequences([sequence], metadata);
    const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);
  
    const prediction = model.predict(input);
    const score = prediction.dataSync()[0];
    prediction.dispose();
    return score;
}

const Card = ({ news: { title, summary, link, published_date, country, author }, model, metadata }) => (
    <Flex flexWrap="wrap" w="450px" p="10" m="5" paddingTop="5" cursor="pointer" bg='gray.50' borderRadius="10">
        <Box>
            <Link href={link}>
                <Text fontSize="xl" _hover={{color: "tomato"}}>
                    {title.length > 100 ? `${title.substring(0, 100)}...` : title}
                </Text>
            </Link>
            <Text paddingTop="1">
                Published in {country} by {author ? author.length > 26 ? `${author.substring(0, 26)}...` : author : 'Unknown Author'}
            </Text>
            <Text>
                on {published_date.substring(5, 10)}
            </Text>
            <Text paddingTop="6">
                {summary.length > 500 ? `${summary.substring(0, 300)}...` : summary}
            </Text>
            <Text paddingTop="6">
                {predict(summary, model, metadata) > 0.8 ? <ImHappy /> : predict(summary, model, metadata) < 0.5 ? <ImSad /> : <ImNeutral />}
            </Text>
        </Box>
    </Flex>
);

export default Card;