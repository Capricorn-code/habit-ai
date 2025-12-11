import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E8E8E8] flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center space-y-8 max-w-md w-full">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
          HABITAI
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-black text-center">
          Your AI-powered guide to better habits.
        </p>

        {/* Spacer */}
        <div className="h-32"></div>

        {/* Get Started Button */}
        <Button
          className="w-full h-14 bg-[#00E676] hover:bg-[#00D768] text-black font-semibold text-lg rounded-xl shadow-md transition-colors"
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
