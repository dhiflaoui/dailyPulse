import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Hadith, hadiths } from "../data/hadiths";

interface HadithProgress {
  [hadithId: number]: number; // hadithId -> repetition count
}

interface HadithContextType {
  hadiths: Hadith[];
  selectedHadith: Hadith | null;
  progress: HadithProgress;
  selectHadith: (hadith: Hadith) => void;
  incrementRepetition: (hadithId: number) => void;
  getRepetitionCount: (hadithId: number) => number;
}

const HadithContext = createContext<HadithContextType | undefined>(undefined);

export const HadithProvider = ({ children }: { children: ReactNode }) => {
  const [selectedHadith, setSelectedHadith] = useState<Hadith | null>(null);
  const [progress, setProgress] = useState<HadithProgress>({});

  // Load progress from localStorage on initial render
  useEffect(() => {
    const savedProgress = localStorage.getItem("hadithProgress");
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (error) {
        console.error("Failed to parse saved progress:", error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("hadithProgress", JSON.stringify(progress));
  }, [progress]);

  const selectHadith = (hadith: Hadith) => {
    setSelectedHadith(hadith);
  };

  const incrementRepetition = (hadithId: number) => {
    setProgress((prev) => {
      const currentCount = prev[hadithId] || 0;
      if (currentCount >= 100) return prev; // Max count reached

      return {
        ...prev,
        [hadithId]: currentCount + 1,
      };
    });
  };

  const getRepetitionCount = (hadithId: number) => {
    return progress[hadithId] || 0;
  };

  return (
    <HadithContext.Provider
      value={{
        hadiths,
        selectedHadith,
        progress,
        selectHadith,
        incrementRepetition,
        getRepetitionCount,
      }}
    >
      {children}
    </HadithContext.Provider>
  );
};

export const useHadith = () => {
  const context = useContext(HadithContext);
  if (context === undefined) {
    throw new Error("useHadith must be used within a HadithProvider");
  }
  return context;
};
