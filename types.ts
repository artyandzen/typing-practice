export type MistakeData = {
  [key: string]: number;
};

export type Theme = 'light' | 'dark';

export type TypingState = {
  sentence: string;
  typed: string;
  cursor: number;
  startTime: number | null;
  endTime: number | null;
  errors: Set<number>;
};

export type TypingStats = {
    wpm: number;
    accuracy: number;
};