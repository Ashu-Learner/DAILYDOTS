import { useEffect, useMemo, useState } from 'react';
import { deleteEntry, getEntries, getEntryByDate, getMoodOptions, saveEntry } from './services/journalService';
import type { JournalEntry, Mood } from './types';

const today = new Date().toISOString().slice(0, 10);

function App() {
  const [activePage, setActivePage] = useState<'home' | 'journals' | 'new'>('home');
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [formDate, setFormDate] = useState(today);
  const [quickDate, setQuickDate] = useState(today);
  const [formMood, setFormMood] = useState<Mood>('happy');
  const [formText, setFormText] = useState('');
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  const summary = useMemo(() => {
    const total = entries.length;
    const latest = entries[0];
    return { total, latest };
  }, [entries]);

  const submitEntry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formText.trim()) {
      setMessage('Please write a few words about your day.');
      return;
    }

    const existing = getEntryByDate(formDate);
    const saved = saveEntry({
      id: editingId ?? existing?.id,
      date: formDate,
      mood: formMood,
      text: formText.trim(),
      createdAt: existing?.createdAt,
    });

    setEntries(getEntries());
    setMessage(existing ? 'Your journal entry was updated.' : 'Your journal entry was created.');
    setEditingId(null);
    setFormDate(today);
    setFormMood('happy');
    setFormText('');
    setActivePage('journals');
  };

  const startEdit = (entry: JournalEntry) => {
    setEditingId(entry.id);
    setFormDate(entry.date);
    setFormMood(entry.mood);
    setFormText(entry.text);
    setActivePage('new');
    setMessage('Editing an existing journal entry.');
  };

  const removeEntry = (id: string) => {
    deleteEntry(id);
    setEntries(getEntries());
    setMessage('Entry removed from your journal.');
  };

  return (
    <main className="min-h-screen text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Daily Journal</p>
              <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Capture one thoughtful entry for every day.</h1>
              <p className="mt-3 max-w-2xl text-slate-300">Create, edit, and review your reflective journal entries with local storage persistence that is easy to swap for a cloud backend later.</p>
            </div>
            <nav className="flex flex-wrap gap-2 rounded-2xl bg-slate-800/80 p-2">
              {[
                ['home', 'Home'],
                ['journals', 'My Journals'],
                ['new', 'Add New Journal'],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActivePage(key as 'home' | 'journals' | 'new')}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${activePage === key ? 'bg-cyan-400 text-slate-950' : 'text-slate-200 hover:bg-slate-700'}`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <section className="mt-6 grid flex-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur md:p-8">
            {activePage === 'home' && (
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Overview</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Your journal at a glance</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-sm text-cyan-100">Entries saved</p>
                    <p className="mt-2 text-4xl font-semibold text-white">{summary.total}</p>
                  </div>
                  <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4">
                    <p className="text-sm text-violet-100">Most recent</p>
                    <p className="mt-2 text-xl font-semibold text-white">{summary.latest ? summary.latest.date : 'No entries yet'}</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-5">
                  <h3 className="text-lg font-semibold text-white">Quick add</h3>
                  <p className="mt-1 text-sm text-slate-300">Add today’s thought in seconds. If the date already exists, the app updates that entry instead of creating duplicates.</p>
                  <form
                    className="mt-4 space-y-4"
                    onSubmit={(event) => {
                      event.preventDefault();
                      setFormDate(quickDate);
                      setActivePage('new');
                    }}
                  >
                    <label className="block text-sm text-slate-200">Date
                      <input
                        type="date"
                        value={quickDate}
                        onChange={(event) => setQuickDate(event.target.value)}
                        onClick={(event) => (event.currentTarget.showPicker?.())}
                        onFocus={(event) => (event.currentTarget.showPicker?.())}
                        className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0"
                      />
                      <span className="mt-1 block text-xs text-slate-400">Choose any day from the calendar or type the date directly.</span>
                    </label>
                    <button type="submit" className="w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Open selected journal form</button>
                  </form>
                </div>
              </div>
            )}

            {activePage === 'journals' && (
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Archive</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Your past journals</h2>
                </div>
                <div className="space-y-3">
                  {entries.length === 0 ? (
                    <p className="rounded-2xl border border-dashed border-white/10 bg-slate-800/70 p-5 text-slate-300">No entries yet. Create your first journal note from the Add New Journal page.</p>
                  ) : entries.map((entry) => (
                    <article key={entry.id} className="rounded-2xl border border-white/10 bg-slate-800/80 p-4 shadow-md shadow-slate-950/20">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">{entry.date}</p>
                          <h3 className="mt-1 text-xl font-semibold text-white">{getMoodOptions().find((item) => item.value === entry.mood)?.emoji} {entry.mood}</h3>
                        </div>
                        <div className="flex gap-2">
                          <button type="button" onClick={() => startEdit(entry)} className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-100 hover:bg-cyan-400/20">Edit</button>
                          <button type="button" onClick={() => removeEntry(entry.id)} className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-3 py-2 text-sm text-rose-100 hover:bg-rose-400/20">Delete</button>
                        </div>
                      </div>
                      <p className="mt-3 whitespace-pre-wrap text-slate-200">{entry.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {activePage === 'new' && (
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Editor</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{editingId ? 'Update your journal entry' : 'Create a journal entry'}</h2>
                  <p className="mt-1 text-sm text-slate-300">One entry per date, saved in local storage through a dedicated service layer.</p>
                </div>
                <form onSubmit={submitEntry} className="space-y-4 rounded-2xl border border-white/10 bg-slate-800/80 p-5">
                  <label className="block text-sm text-slate-200">Date
                    <input
                      type="date"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      onClick={(event) => (event.currentTarget.showPicker?.())}
                      onFocus={(event) => (event.currentTarget.showPicker?.())}
                      required
                      className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0"
                    />
                    <span className="mt-1 block text-xs text-slate-400">You can select any past day from the calendar or enter YYYY-MM-DD manually.</span>
                  </label>
                  <label className="block text-sm text-slate-200">Mood
                    <select value={formMood} onChange={(e) => setFormMood(e.target.value as Mood)} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0">
                      {getMoodOptions().map((option) => (
                        <option key={option.value} value={option.value}>{option.emoji} {option.label}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm text-slate-200">Journal text
                    <textarea value={formText} onChange={(e) => setFormText(e.target.value)} rows={8} required placeholder="What happened today? What are you feeling?" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0" />
                  </label>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <button type="submit" className="rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">{editingId ? 'Update entry' : 'Save entry'}</button>
                    {editingId && <button type="button" onClick={() => { setEditingId(null); setFormDate(today); setFormMood('happy'); setFormText(''); setMessage('New entry mode.'); }} className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">Cancel edit</button>}
                  </div>
                </form>
              </div>
            )}
          </article>

          <aside className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur md:p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-pink-300">Status</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Daily journal tips</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">Use one entry per date to keep your journal easy to scan.</li>
              <li className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">Pick a mood that captures how you felt during the day.</li>
              <li className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">Editing an existing date updates the same entry instead of duplicating it.</li>
            </ul>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">{message || 'Everything is ready. Create your first journal entry to get started.'}</div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default App;
