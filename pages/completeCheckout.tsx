import Image from "next/image";

function completeCheckout() {
  return (
    <section className="complete-checkout mx-auto pt-lg-145 pb-lg-145 pt-100 pb-80">
      <div className="container-fluid">
        <div className="text-center">
          <Image
            src="/img/Complete-checkout.png"
            width={343}
            height={300}
            alt="checkout-complete"
          />
        </div>
        <div className="pt-70 pb-50">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
            Checkout Completed
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            We will check your payment
            <br className="d-sm-block d-none" /> and contact via WhatsApp
          </p>
        </div>
        <div className="button-group d-flex flex-column mx-auto">
          <a
            className="btn btn-dashboard fw-medium text-lg text-white rounded-pill mb-16"
            href="/"
            role="button"
          >
            My Dashboard
          </a>
          <a
            className="btn btn-whatsapp fw-medium text-lg color-palette-1 rounded-pill"
            href="/#"
            role="button"
          >
            WhatsApp to Admin
          </a>
        </div>
      </div>
    </section>
  );
}

export default completeCheckout;
