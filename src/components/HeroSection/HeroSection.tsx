import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Input } from "../ui/input";
import { BorderBeam } from "../magicui/border-beam";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const HeroSection = () => {
  const words = [
    {
      text: "Experience",
      className: "font-semibold",
    },
    {
      text: "expert",
      className: "font-semibold",
    },
    {
      text: "care",
      className: "font-semibold",
    },
    {
      text: "with",
      className: "font-semibold",
    },
    {
      text: "DoctorG.",
      className: "text-green-500 dark:text-green-400 font-bold",
    },
  ];

  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [symptoms, setSymptoms] = useState("");

  const handleButtonClick = async () => {
    try {
      const response = await fetch("https://doctorg.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symptoms: symptoms,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  interface ApiResponse {
    top_diseases: [string, number][];
    top_description: string;
  }

  const formatResponse = (response: ApiResponse | null): string => {
    if (!response || !response.top_diseases || !response.top_description) {
      return "Your response will be generated here!";
    }

    const diseases = response.top_diseases
      .map((disease) => `Probable Disease: ${disease[0]}, Score: ${disease[1]}`)
      .join("\n");

    const description = `\n\nDescription:\n${response.top_description}`;

    return `${diseases}${description}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
          Here is your Virtual Doctor
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="flex flex-col items-center justify-center top-[50px]">
        <div className="flex flex-col sm:flex-row gap-2 w-[90vw] sm:w-[50vw] h-[50px]">
          <Input
            placeholder="Type your Symptoms here!"
            className="font-mono font-light text-xs sm:text-base text-gray-50"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          <Button onClick={handleButtonClick} variant="outline">
            Submit
          </Button>
        </div>
        <div className="relative w-[90vw] sm:w-[50vw] h-[40vh] rounded-xl top-[50px]">
          <BorderBeam />
          <Textarea
            placeholder="Your response will be generated here!"
            className="h-[40vh] resize-none font-mono font-light text-xs sm:text-base text-gray-50"
            readOnly
            value={formatResponse(response)}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
