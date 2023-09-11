import { create } from 'zustand'

export const useTimerStore = create((set) => ({
    timer: 15,
    setTimer: (newTimerValue) => {
        set({ timer: newTimerValue });
    },
}))

export const useTheme = create((set) => ({
    isDarkMode: false,
    setIsDarkMode: (newTheme) => {
        set({ isDarkMode: newTheme });
    },
}))

export const useRead = create((set) => ({
    subject: "",
    setSubject: (sub) => {
        set({ subject: sub });
    },
    week: "",
    setWeek: (value) => {
        set({ week: value });
    },
}))

export const useResultStore = create((set) => ({
    status: true,
    totalQuestions: 15,
    attempts: 0,
    correct: 0,
    markSecured: 0,
    totalMark: 5,
    setStatus: (value) => set({ status: value }),
    setTotalQuestions: (value) => set({ totalQuestions: value }),
    setStoreAttempts: (value) => set({ attempts: value }),
    setCorrect: (value) => set({ correct: value }),
    setMarkSecured: (value) => set({ markSecured: value }),
    setTotalmark: (value) => set({ totalMark: value }),
}));

export const useSetting = create((set) => ({
    correctMarkValue: 2,
    setCorrectMarkValue: (value) => {
        set({ correctMarkValue: value });
    },
}))