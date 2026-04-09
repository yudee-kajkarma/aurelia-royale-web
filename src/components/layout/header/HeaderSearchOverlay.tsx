import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";

type HeaderSearchOverlayProps = {
  open: boolean;
  reduceMotion: boolean | null;
  onClose: () => void;
};

export function HeaderSearchOverlay({
  open,
  reduceMotion,
  onClose,
}: HeaderSearchOverlayProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-start bg-black/55 p-4 pt-24"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="mx-auto flex w-full max-w-2xl items-center gap-2 border border-[var(--gold)]/35 bg-[#0a0f18] p-3"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: reduceMotion ? 0 : -16, scale: reduceMotion ? 1 : 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -12, scale: reduceMotion ? 1 : 0.99 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <Search size={18} className="text-[var(--gold)]" />
            <input
              autoFocus
              type="text"
              placeholder="What are you looking for"
              className="h-11 flex-1 bg-transparent text-white outline-none placeholder:text-white/55"
            />
            <button type="button" onClick={onClose} className="rounded border border-white/20 p-2 text-white/75">
              <X size={16} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}