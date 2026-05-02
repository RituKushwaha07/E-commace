import { useParams } from "react-router-dom";

export default function OrderSuccess() {
  const { id } = useParams();

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-6">
          <div className="card shadow text-center">
            <div className="card-body">

              {/* Success Alert */}
              <div className="alert alert-success">
                <h4 className="alert-heading mb-2">
                  🎉 Order Placed Successfully
                </h4>
                <p className="mb-0">
                  Your order has been placed successfully.
                </p>
              </div>

              {/* Order ID */}
              <p className="mt-3">
                Your Order ID:
                <span className="fw-bold ms-2">{id}</span>
              </p>

              {/* Button */}
              <button
                onClick={goHome}
                className="btn btn-primary mt-3"
              >
                Continue Shopping
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}