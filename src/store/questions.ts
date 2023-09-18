import { create } from 'zustand'
import { type Quest } from '../interfaces/quest.interface'
import questionsJson from '../assets/data.json'
interface MyZustandState {
  questions: Quest[]
  currentQuestion: number
  fetchQuestions: (limit: number) => void
}

export const useQuestionStore = create<MyZustandState>((set) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: (limit) => {
      const questions = questionsJson
        .sort(() => Math.random() - 0.5)
        .slice(0, limit)

      set({ questions })
    }
  }
})
