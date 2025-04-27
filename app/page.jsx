'use client';
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Flame } from "lucide-react";

const challenges = [
  "Write a one-line love note and hide it for your partner to find.",
  "Create a handshake that only you two use.",
  "Swap phones and take a silly photo as each other’s lock screen.",
  "Come up with your own inside joke today.",
  "Speak in a made-up language for 10 minutes.",
  "Share your favorite memory of the other person and act it out together.",
  "Each of you choose a 3-song playlist that reminds you of the other. Share why.",
  "Ask: 'What’s one thing you wish I understood better?'",
  "Share a moment you felt insecure, and what you needed then.",
  "Reveal a fear you haven’t shared before (big or small).",
  "Whisper one fantasy you’ve had (sweet or spicy).",
  "Ask: 'When do you feel most loved by me?'",
  "Write a short 'thank you' letter to each other.",
  "Take 5 minutes to just hold hands and breathe together—no talking.",
  "Send a flirty text during the day with no explanation.",
  "Give a 3-minute massage (no words allowed).",
  "Kiss for exactly 60 seconds… then go back to whatever you were doing.",
  "Describe your partner in 3 words… slowly, looking into their eyes.",
  "Wear something they like—even if it’s just a color.",
  "Pick a safe word and use it to trigger a kiss when whispered.",
  "Find a private spot and make out like teenagers (no full intimacy—just tension).",
  "Share one relationship goal and how you’d love to work on it together.",
  "Pick one household or life task you’ll help them with this week without them asking.",
  "Talk about what your life together might look like in 5 years.",
  "Take 5 minutes to tell them why they inspire you.",
  "Ask: 'What’s something I do that makes you proud?'",
  "Plan a micro dream day together (free or not).",
  "Write a couple’s 'mission statement' for the future.",
  "Surprise your partner with a tiny gift, letter, or thoughtful gesture.",
  "Set a timer for 7 minutes and dance together to 2–3 songs. No rules. Just feel."
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState([]);

  const nextChallenge = () => setIndex((index + 1) % challenges.length);
  const toggleComplete = () => {
    if (!completed.includes(index)) {
      setCompleted([...completed, index]);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Flame className="text-red-500" /> The Daily Flame
      </h1>
      <Card>
        <CardContent className="p-6 text-center text-lg">
          {challenges[index]}
        </CardContent>
      </Card>
      <div className="flex gap-4 mt-6">
        <Button onClick={toggleComplete}>Mark Complete</Button>
        <Button onClick={nextChallenge}>Next Challenge</Button>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Completed: {completed.length} / {challenges.length}
      </div>
    </div>
  );
}