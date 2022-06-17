import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";
import TopupForm from "../../components/organisms/TopupForm";
import TopupItem from "../../components/organisms/TopupItem";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

function Detail() {
  const router = useRouter();

  return (
    <>
      <Layout>
        <section className="detail pt-lg-60 pb-50">
          <div className="container-xxl container-fluid">
            <div className="detail-header pb-50">
              <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
                Top Up
              </h2>
              <p className="text-lg color-palette-1 mb-0">
                Strengthen your account and become a winner
              </p>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                {/* mobile */}
                <TopupItem
                  title={router.query.title}
                  photo={router.query.photo}
                  category={router.query.category}
                  type="mobile"
                />
              </div>
              <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                {/* Desktop: Game title  */}
                <TopupItem
                  type="desktop"
                  title={router.query.title}
                  photo={router.query.photo}
                  category={router.query.category}
                />
                <hr />
                <form action="/checkout">
                  <div className="pt-md-50 pt-30">
                    <div className="">
                      <label
                        htmlFor="ID"
                        className="form-label text-lg fw-medium color-palette-1 mb-10"
                      >
                        Verify ID
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-pill text-lg"
                        id="ID"
                        name="ID"
                        aria-describedby="verifyID"
                        placeholder="Enter your ID"
                      />
                    </div>
                  </div>
                  <TopupForm />
                  <a
                    href="/checkout"
                    type="submit"
                    className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
                  >
                    Continue
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Detail;
