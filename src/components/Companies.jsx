import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Plus, X } from 'lucide-react';

const defaultCompanies = [
  { key: 'devnusantara', name: 'DevNusantara', desc: 'Cultural-grade platforms for global reach.' },
  { key: 'devai', name: 'DevAI', desc: 'Applied AI and ML systems with measurable impact.' },
  { key: 'deviot', name: 'DevIoT', desc: 'Edge-to-cloud IoT with secure orchestration.' },
  { key: 'devcyber', name: 'DevCyber', desc: 'Security engineering and continuous hardening.' },
];

function useLocalState(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);
  return [state, setState];
}

export default function Companies() {
  const [editMode, setEditMode] = useLocalState('dn_edit_mode', false);
  const [logos, setLogos] = useLocalState('dn_company_logos', {});
  const [projects, setProjects] = useLocalState('dn_company_projects', {});
  const [active, setActive] = useState(null);

  const companies = useMemo(() => defaultCompanies, []);

  const onUpload = (cKey, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setLogos((prev) => ({ ...prev, [cKey]: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const addProject = (cKey, title) => {
    if (!title) return;
    setProjects((prev) => {
      const list = prev[cKey] || [];
      return { ...prev, [cKey]: [...list, { title, id: Date.now() }] };
    });
  };

  const removeProject = (cKey, id) => {
    setProjects((prev) => {
      const list = prev[cKey] || [];
      return { ...prev, [cKey]: list.filter((p) => p.id !== id) };
    });
  };

  return (
    <section id="companies" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-semibold sm:text-left sm:text-4xl"
          >
            Our Companies
          </motion.h2>
          <button
            onClick={() => setEditMode((v) => !v)}
            className={`rounded-full border px-4 py-2 text-sm backdrop-blur transition ${
              editMode
                ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
            }`}
          >
            {editMode ? 'Edit Mode: ON' : 'Edit Mode'}
          </button>
        </div>

        <p className="mx-auto mt-3 max-w-2xl text-center text-white/60 sm:text-left">
          Upload your company logo and showcase projects. Click any card to view details.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 backdrop-blur"
            >
              <button
                onClick={() => setActive(c.key)}
                className="block w-full text-left"
              >
                <div className="relative mb-4 h-20 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2">
                  {logos[c.key] ? (
                    <img src={logos[c.key]} alt={`${c.name} logo`} className="h-full w-full object-contain" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-white/40">
                      <ImageIcon className="mr-2 h-5 w-5" /> Upload Logo
                    </div>
                  )}
                  {editMode && (
                    <label className="absolute right-2 top-2 inline-flex cursor-pointer items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2 py-1 text-xs text-white/80 hover:bg-black/70">
                      <Plus className="h-3.5 w-3.5" /> Logo
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => onUpload(c.key, e.target.files?.[0] || null)}
                      />
                    </label>
                  )}
                </div>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-white/70">{c.desc}</p>
                <div className="mt-4 text-sm text-blue-300">View projects →</div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 text-white backdrop-blur"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Projects — {defaultCompanies.find((d) => d.key === active)?.name}</h3>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-white/10 bg-white/10 p-2 text-white/80 hover:bg-white/15"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3">
                {(projects[active] || []).length === 0 && (
                  <p className="text-sm text-white/60">No projects yet. {editMode ? 'Add your first project below.' : ''}</p>
                )}
                {(projects[active] || []).map((p) => (
                  <div key={p.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-3">
                    <div className="text-sm">{p.title}</div>
                    {editMode && (
                      <button
                        onClick={() => removeProject(active, p.id)}
                        className="text-xs text-white/50 hover:text-red-300"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {editMode && (
                <ProjectAdder onAdd={(title) => addProject(active, title)} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectAdder({ onAdd }) {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(value.trim());
        setValue('');
      }}
      className="mt-6 flex items-center gap-2"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Project title (e.g., Mobile Banking App)"
        className="flex-1 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none"
      />
      <button
        type="submit"
        className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200 hover:bg-emerald-400/15"
      >
        Add
      </button>
    </form>
  );
}
