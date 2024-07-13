import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-6 bg-gray-800 shadow-lg rounded-lg max-w-xl w-full">
        <div className="text-center">
          <h1 className="text-white text-7xl font-black">Order Completed!</h1>
          <p className="text-gray-400 mt-4 font-medium">
            Thank you for your purchase. Your order has been successfully
            completed.
          </p>
          <Button
            onClick={handleHomeRedirect}
            className="mt-6 bg-red-600 hover:bg-red-700 text-white"
          >
            Go to Home Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
