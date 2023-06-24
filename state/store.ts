import { create } from "zustand";

interface BearState {
  variant: string;
  activeButton: string | null;
  setActiveButton: (activeButton: string | null) => void;
  onClick: () => void;
  handleClick: (variant: string) => void;
}

const useNavContent = create<BearState>((set) => ({
  variant: "",
  activeButton: null,
  setActiveButton: (active) => set({ activeButton: active }),
  onClick: () => {},
  handleClick: (variant) => {
    set({ activeButton: variant });
  },
}));

export default useNavContent;
