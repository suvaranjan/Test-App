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

export const useAlert = create((set) => ({
    showAlert: false,
    setShowAlert: (alert) => {
        set({ showAlert: alert });
    },
}))

// const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
// useTheme.setState({ isDarkMode: prefersDarkMode });

// export const useMusic = create((set) => ({
//     isMusic: true,
//     setIsMusic: (newValue) => {
//         set({ isMusic: newValue });
//     },
// }))

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
    userPercentage: 0,
    setStatus: (value) => set({ status: value }),
    setTotalQuestions: (value) => set({ totalQuestions: value }),
    setStoreAttempts: (value) => set({ attempts: value }),
    setCorrect: (value) => set({ correct: value }),
    setMarkSecured: (value) => set({ markSecured: value }),
    setTotalmark: (value) => set({ totalMark: value }),
    setUserPercentage: (value) => set({ userPercentage: value }),
}));

export const useSetting = create((set) => ({
    correctMarkValue: 2,
    setCorrectMarkValue: (value) => {
        set({ correctMarkValue: value });
    },
    percentage: 30,
    setPercentage: (value) => {
        set({ percentage: value });
    },
}))