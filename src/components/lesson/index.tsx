import { Quest } from '../../interfaces/quest.interface'
import { AnswersList } from './answer-list'
import { NavigateQuestions } from './navigate-questions'
import { Question } from './question'
import { ProgressBar } from './progress-bar/index'
import { useQuestionStore } from '../../store/questions'
import { Link } from 'react-router-dom'

export function Lesson({ questionInfo }: { questionInfo: Quest }) {
  const totalQuestionsLength = useQuestionStore(
    (myState) => myState.questions
  ).length
  const actualQuiestion = useQuestionStore((myState) => myState.currentQuestion)

  return (
    <section className="h-full max-w-xl w-full flex flex-col justify-between items-center">
      <section className="w-full h-full flex justify-center items-center gap-5 flex-col">
        <section className="w-full h-8 flex gap-2 justify-between items-center">
          <Link to="/" className="h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              className="dark:fill-cm-gray fill-cm-text-gray cursor-pointer h-full"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </Link>
          <ProgressBar
            maxValue={totalQuestionsLength}
            actualValue={actualQuiestion}
          />
        </section>
        <Question text={questionInfo.originalText} />
        <AnswersList question={questionInfo} />
      </section>
      <section className="w-full h-max flex justify-center items-end sm:pb-11 pb-5">
        <NavigateQuestions />
      </section>
    </section>
  )
}
