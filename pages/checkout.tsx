import Image from "next/image";
import CheckoutDetails from "../components/organisms/CheckoutDetails";
import CheckoutInformations from "../components/organisms/CheckoutInformation";
import CheckoutPayment from "../components/organisms/CheckoutPayment";

function index() {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="#">
            <Image src="/icon/logo.png" width={60} height={60} alt="Logo" />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
          <div className="pe-4">
            <div className="cropped">
              <img src="/img/Thumbnail-3.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div>
            <p className="fw-bold text-xl color-palette-1 mb-10">
              Mobile Legends: <br /> The New Battle 2021
            </p>
            <p className="color-palette-2 m-0">Category: Mobile</p>
          </div>
        </div>
        <hr />
        <CheckoutDetails />
        <CheckoutInformations />
        <CheckoutPayment />
        <div className="d-md-block d-flex flex-column w-100 pt-50">
          <a
            className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
            href="/completeCheckout"
            role="button"
          >
            Confirm Payment
          </a>
        </div>
      </div>
    </section>
  );
}

export default index;
