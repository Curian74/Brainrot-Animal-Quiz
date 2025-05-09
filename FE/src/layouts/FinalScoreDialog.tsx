import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface FinalScoreDialogProps {
  score: string | undefined | number;
  status: string;
  timeTaken: number | null | undefined;
  isOpen: boolean;
  statusColor: string;
  handleModalStatus: () => void;
}

const FinalScoreDialog = ({ score, status, timeTaken, isOpen, statusColor, handleModalStatus}: FinalScoreDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={handleModalStatus}>
      <DialogContent className="sm:max-w-[400px] text-center">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center">Final Score</DialogTitle>
        </DialogHeader>

        <div className="grid gap-3">
          <div className="text-lg">
            <span className="font-semibold">Score:</span> {score}
          </div>
          <div className="text-lg">
            <span className="font-semibold">Status: </span>
            <span className={`text-${statusColor}-600 font-bold`}>
              {status}
            </span>
          </div>
          <div className="text-lg">
            <span className="font-semibold">Time Taken:</span> {timeTaken}
          </div>
        </div>

        <DialogFooter className="mt-3">
          <Button
            variant="secondary"
            className="bg-[#0969da] rounded-lg hover:bg-blue-800 transition cursor-pointer text-white font-semibold">
            Review Now
          </Button>
          <Button
            onClick={handleModalStatus}
            className="rounded-lg hover:bg-[#eceaea] transition cursor-pointer font-semibold"
            variant="secondary">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default FinalScoreDialog
