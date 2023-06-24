import { create } from "zustand";

interface NavState {
  variant: string;
  activeButton: string | null;
  setActiveButton: (activeButton: string | null) => void;
  onClick: () => void;
  handleClick: (variant: string) => void;
}

const useNavContent = create<NavState>((set) => ({
  variant: "",
  activeButton: null,
  setActiveButton: (active) => set({ activeButton: active }),
  onClick: () => {},
  handleClick: (variant) => {
    set({ activeButton: variant });
  },
}));

export default useNavContent;
