
import { create } from 'zustand'

type InputStoreState = {
  date: Date;
  numOfTeachers: string;
  classes: Record<string, string>;
  totalNum: string;
  message: string;
};

type InputStoreSetters = {
  setDate: (date: Date) => void;
  setNumOfTeachers: (num: string) => void;
  setClasses: (classes: Record<string, string>) => void;
  setTotalNum: (num: string) => void;
  setMessage: (message: string) => void;
}

export const useInputStore = create<InputStoreState & InputStoreSetters>((set) => {
  const initialState: InputStoreState = {
    date: new Date(),
    numOfTeachers: '0',
    classes: {},
    totalNum: '0',
    message: '',
  };

  type InputStoreSetters = {
    setDate: (date: Date) => void;
    setNumOfTeachers: (num: string) => void;
    setClasses: (classes: Record<string, string>) => void;
    setTotalNum: (num: string) => void;
    setMessage: (message: string) => void;
    [key: string]: ((arg: any) => void) | undefined;
  };

  const setters: InputStoreSetters = {
    setDate: (date) => set({ date }),
    setNumOfTeachers: (num) => set({ numOfTeachers: num }),
    setClasses: (classes) => set({ classes }),
    setTotalNum: (num) => set({ totalNum: num }),
    setMessage: (message) => set({ message }),
  };

  for (let i = 1; i <= 10; i++) {
    const key = `class${i}`;
    initialState.classes[key] = '0';
    setters[`set${key.charAt(0).toUpperCase()}${key.slice(1)}`] = (num) =>
      set({ classes: { ...initialState.classes, [key]: num } });
  }

  return {
    ...initialState,
    ...setters,
  };
});