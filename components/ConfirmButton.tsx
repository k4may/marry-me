import { FaCheck, FaSpinner } from "react-icons/fa";

interface ConfirmButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export const ConfirmButton = ({ isLoading, onClick }: ConfirmButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center mx-auto px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin mr-2" />
          Enviando...
        </>
      ) : (
        <>
          <FaCheck className="mr-2" /> Confirmar Presença
        </>
      )}
    </button>
  );
};