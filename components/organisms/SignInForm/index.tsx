import Image from "next/image";

export default function SignInForm() {
  return (
    <form action="">
      <div className="container mx-auto">
        <div className="pb-50">
          <a className="navbar-brand" href="/">
            <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
          </a>
        </div>
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
        <p className="text-lg color-palette-1 m-0">
          Log in to do the top up process
        </p>
        <div className="pt-50">
          <label
            htmlFor="email"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Email Address
          </label>
          <input
            type="email"
            className="form-control rounded-pill text-lg"
            id="email"
            name="email"
            aria-describedby="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="pt-30">
          <label
            htmlFor="password"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control rounded-pill text-lg"
            id="password"
            name="password"
            aria-describedby="password"
            placeholder="Your password"
          />
        </div>
        <div className="button-group d-flex flex-column mx-auto pt-50">
          <a
            className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
            href="/"
            role="button"
          >
            Continue to Sign In
          </a>

          <a
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
            href="/signUp"
            role="button"
          >
            Sign Up
          </a>
        </div>
      </div>
    </form>
  );
}
