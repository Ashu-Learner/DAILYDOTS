export type Mood = 'happy' | 'calm' | 'focused' | 'tired' | 'stressed';

export interface JournalEntry {
  id: string;
  date: string;
  mood: Mood;
  text: string;
  createdAt: string;
}
