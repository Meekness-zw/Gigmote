"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "./Button";

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <div className="mb-4 w-80 max-w-[90vw] rounded-3xl shadow-2xl border border-hugo-black/10 bg-white overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-hugo-black text-white">
            <div>
              <p className="text-sm font-semibold">Gigmote Assistant</p>
              <p className="text-[11px] text-white/70">
                AI pre-qualification (no human yet)
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-white/10"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-4 space-y-3 text-xs text-hugo-black/80 max-h-80 overflow-y-auto">
            <div className="bg-hugo-cream/80 rounded-2xl px-3 py-2">
              <p className="font-semibold text-[11px] mb-1">
                Before we bring in a human:
              </p>
              <p>
                1) What type of help do you need (staffing, BPO, AI)? <br />
                2) How many FTEs or workflows are you thinking about? <br />
                3) What industry are you in?
              </p>
            </div>
            <p>
              Share quick answers here and we&apos;ll follow up after you submit
              the main form or email us at{" "}
              <span className="font-semibold">info@gigmote.com</span>.
            </p>
          </div>

          <div className="px-4 pb-4 pt-1">
            <textarea
              rows={2}
              className="w-full text-xs px-3 py-2 border border-hugo-black/10 rounded-2xl bg-hugo-cream/50 focus:outline-none focus:ring-1 focus:ring-hugo-black resize-none"
              placeholder="Type a quick summary. This widget is for pre-qualification only."
            />
            <div className="flex justify-end mt-2">
              <Button size="sm" variant="primary" className="text-xs px-3">
                Save Notes
              </Button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full shadow-xl bg-hugo-black text-white h-12 w-12 flex items-center justify-center hover:bg-gray-800 active:scale-95 transition"
        aria-label="Open chat widget"
      >
        <MessageCircle size={20} />
      </button>
    </div>
  );
};

