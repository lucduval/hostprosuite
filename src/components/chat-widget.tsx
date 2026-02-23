"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "bot";
  text: string;
}

const quickReplies: Record<string, string> = {
  pricing:
    "HostProSuite is R200/month with a small 4% transaction fee for secure payments. No commissions!",
  features:
    "You get a commission-free booking page, global payment gateway, smart booking management, customisable guest experience, reports, and multi-property support.",
  "how it works":
    "It's simple: sign up & register your property, set up your booking page, then start accepting direct bookings. No technical skills needed!",
  ota: "Yes! HostProSuite works alongside OTAs. Many hosts list on Airbnb/Booking.com for new guests but send repeat visitors their direct booking link.",
  website:
    "No website needed! You get a ready-to-use booking page you can share on Facebook, Instagram, WhatsApp, and Google.",
  contact:
    "You can reach us at +27 72 747 5517 or info@booksure.com. We'd love to help!",
  payment:
    "We accept Visa, Mastercard, American Express, and Diners Club. Payouts happen within 2–4 business days.",
};

function findReply(input: string): string {
  const lower = input.toLowerCase();
  for (const [keyword, reply] of Object.entries(quickReplies)) {
    if (lower.includes(keyword)) return reply;
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("much"))
    return quickReplies.pricing;
  if (lower.includes("book") || lower.includes("commission"))
    return quickReplies["how it works"];
  if (lower.includes("pay") || lower.includes("card") || lower.includes("visa"))
    return quickReplies.payment;
  if (lower.includes("airbnb") || lower.includes("booking.com"))
    return quickReplies.ota;
  if (lower.includes("site") || lower.includes("web"))
    return quickReplies.website;
  if (lower.includes("phone") || lower.includes("email") || lower.includes("call"))
    return quickReplies.contact;
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey"))
    return "Hi there! I can help with questions about pricing, features, how it works, payments, and more. What would you like to know?";
  return "Great question! For detailed assistance, feel free to contact us at info@booksure.com or +27 72 747 5517. You can also ask me about pricing, features, or how HostProSuite works.";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm here to help you learn about HostProSuite. Ask me about pricing, features, or how it works!",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = { role: "bot", text: findReply(trimmed) };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  }

  return (
    <>
      {/* Chat panel */}
      <div
        className={cn(
          "fixed bottom-20 left-4 right-4 z-50 flex max-w-96 flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl transition-all duration-300 sm:left-auto sm:right-6",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
        style={{ height: "min(28rem, calc(100dvh - 7rem))" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-accent-orange" />
            <span className="text-sm font-semibold">HostProSuite Help</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-1 transition-colors hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                msg.role === "bot"
                  ? "mr-auto bg-muted text-foreground"
                  : "ml-auto bg-accent-orange text-white"
              )}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2 border-t p-3"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a question..."
            className="flex-1 text-sm"
          />
          <Button
            type="submit"
            size="icon"
            className="shrink-0 bg-accent-orange text-white hover:bg-accent-orange-dark"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent-orange text-white shadow-lg shadow-accent-orange/30 transition-transform duration-200 hover:scale-105 sm:right-6"
        aria-label="Open chat"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </>
  );
}
