// import { trainingExamples } from "./trainingExamples";
import { getExtractor } from "./EmbeddingService";
import { cosineSimilarity } from "./SimilarityService";
import { getCachedExamples } from "./EmbeddingCache";

export async function parseSemantically(question)
{

    const matches = question.match(/\d+/g);
    const numbers = !matches || matches.length < 2 ? [] : matches.map(Number);
    if (numbers.length == 0)
        return null;
    const r = numbers[0];
    const n = numbers[1];

    const extractor = await getExtractor();

    console.log(extractor);

    const questionEmbedding = await extractor(
        question,
        {
            pooling: "mean",
            normalize: true
        }
    );

    console.log(questionEmbedding);

    const examples = await getCachedExamples();

    console.log(examples);

    let bestScore = -1;
    let bestType = null;

    for (const item of examples)
    {
        const score = cosineSimilarity(
            questionEmbedding.data,
            item.embedding
        );

        if (score > bestScore)
        {
            bestScore = score;
            bestType = item.type;
        }
    }

    if (!bestType)
    {
        return null;
    }

    return {
        type: bestType,
        parameters: {n,r},
        confidence: bestScore
    };
}