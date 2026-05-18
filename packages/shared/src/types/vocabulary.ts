export type VocabularyGraph = {
  words: Record<string, WordNode>;
  edges: Record<string, WordEdge>;
};

export type WordNode = {
  id: string;
  text: string;
  language: string;
};

export type WordEdge = {
  id: string;
  wordAId: string;
  wordBId: string;
  weight: number;
};

export type VocabularyEntry = {
  id: string;
  term: string;
  definition: string;
  examples: string[];
};
