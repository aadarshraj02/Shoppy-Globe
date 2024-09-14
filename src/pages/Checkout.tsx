import { Link } from "react-router-dom";

const CheckoutPage = (): JSX.Element => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <p className="text-lg mb-4">Thank you for shopping with us!</p>
      <div className="flex justify-center">
        <Link to="/">
          <button className="bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-6 py-3 rounded">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
