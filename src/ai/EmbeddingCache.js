import { trainingExamples } from "./trainingExamples";
import { getExtractor } from "./EmbeddingService";

let cachedExamples = null;

export async function getCachedExamples()
{
    if (cachedExamples)
    {
        return cachedExamples;
    }

    const extractor = await getExtractor();

    const results = [];

    for (const group of trainingExamples)
    {
        for (const example of group.examples)
        {
            const embedding = await extractor(
                example,
                {
                    pooling: "mean",
                    normalize: true
                }
            );

            results.push({
                type: group.type,
                example,
                embedding: embedding.data
            });
        }
    }

    cachedExamples = results;

    return cachedExamples;
}