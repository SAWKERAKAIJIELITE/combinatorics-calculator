import { pipeline } from "@huggingface/transformers";

let extractor = null;

export async function getExtractor()
{
    if (!extractor)
    {
        extractor = await pipeline(
            "feature-extraction",
            // "Xenova/all-MiniLM-L6-v2",
            "Xenova/all-MiniLM-L12-v2",
            // "Xenova/paraphrase-MiniLM-L3-v2",
            // "Xenova/bge-small-en-v1.5",
        );
    }
    return extractor;
}