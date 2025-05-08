import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface QuizTakingModalProps {
  title?: string;
  description?: string;
  answeredQuestionMsg?: string;
  isOpen: boolean;
  toggleModalState: () => void;
  submitHandler: () => void;
}

const QuizTakingModal = ({ title, description, answeredQuestionMsg, isOpen, toggleModalState, submitHandler}: QuizTakingModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={toggleModalState}>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogHeader className="text-sm text-[#cd5775] font-medium">
            {answeredQuestionMsg}
          </DialogHeader>
          <DialogDescription className="font-semibold">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="button"
            onClick={toggleModalState}
            className="bg-white border rounded-sm border-gray-500 text-gray-500 cursor-pointer hover:bg-gray-100 w-20"
          >
            Back
          </Button>
          <Button
            type="submit"
            onClick={submitHandler}
            className="bg-white rounded-sm border border-green-600 text-green-600 cursor-pointer 
             hover:bg-green-50 w-32 transition-colors duration-200">
            Score Exam
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default QuizTakingModal
