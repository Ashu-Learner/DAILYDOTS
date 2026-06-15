import type { JournalEntry, Mood } from '../types';

const STORAGE_KEY = 'daily-journal-entries';

const moodOptions: Array<{ value: Mood; label: string; emoji: string }> = [
  { value: 'happy', label: 'Happy', emoji: '😊' },
  { value: 'calm', label: 'Calm', emoji: '🌿' },
  { value: 'focused', label: 'Focused', emoji: '🧠' },
  { value: 'tired', label: 'Tired', emoji: '😴' },
  { value: 'stressed', label: 'Stressed', emoji: '😵' },
];

function readEntries(): JournalEntry[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as JournalEntry[];
  } catch {
    return [];
  }
}

function writeEntries(entries: JournalEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function getMoodOptions() {
  return moodOptions;
}

export function getEntries(): JournalEntry[] {
  return [...readEntries()].sort((a, b) => b.date.localeCompare(a.date));
}

export function getEntryByDate(date: string) {
  return readEntries().find((entry) => entry.date === date);
}

export function saveEntry(entry: Omit<JournalEntry, 'id' | 'createdAt'> & { id?: string; createdAt?: string }) {
  const entries = readEntries();
  const nextEntry: JournalEntry = {
    id: entry.id ?? crypto.randomUUID(),
    date: entry.date,
    mood: entry.mood,
    text: entry.text.trim(),
    createdAt: entry.createdAt ?? new Date().toISOString(),
  };

  const existingIndex = entries.findIndex((item) => item.date === nextEntry.date);
  if (existingIndex >= 0) {
    entries.splice(existingIndex, 1, nextEntry);
  } else {
    entries.push(nextEntry);
  }

  writeEntries(entries);
  return nextEntry;
}

export function deleteEntry(id: string) {
  const nextEntries = readEntries().filter((entry) => entry.id !== id);
  writeEntries(nextEntries);
}
