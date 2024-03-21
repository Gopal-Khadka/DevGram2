import { FaGoogle, FaGithub } from "react-icons/fa";

const Form = () => {
  return (
    <div className="col-auto p-4">
      <form>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="inputName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPass" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPass"
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100 mb-3">
          Register
        </button>
        <button type="submit" className="btn btn-dark w-100 mb-3">
          <FaGithub className="me-2" />
          <span>SignUp With GitHub</span>
        </button>

        <button type="submit" className="btn btn-primary w-100 mb-3">
          <FaGoogle className="me-2" /> SignUp With Google
        </button>
        <p className="fs-6">
          Already have an account?
          <a href="#" className="btn btn-link">
            SignIn Here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Form;
