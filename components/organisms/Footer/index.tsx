import Image from "next/image";

function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/" className="mb-30">
                <Image src="/icon/logo.png" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                DigiStore <br /> help gamers to become true winners
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2022. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="/pageNotFound"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="/pageNotFound"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Press Release
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="/pageNotFound"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="/pageNotFound"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Privacy & Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="/pageNotFound"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Refund Policy
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="/pageNotFound"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Unlock Rewards
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="/pageNotFound"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Live Chatting
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="mailto: hi@store.gg"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        @digistore.com
                      </a>
                    </li>

                    <li className="mb-6">
                      <a
                        href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Pasific 12, Jakarta
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="tel: 02111229090"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        021 - 1122 - 9090
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
