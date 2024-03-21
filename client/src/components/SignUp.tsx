import Image from "./Login/Image";
import Form from "./Login/Form";

const SignUp = () => {
  const image = {
    url: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg",
    width: "300px",
  };
  return (
    <main className="container d-flex align-items-center justify-content-center vh-100 fs-5">
      <div className="row p-5">
        <Image url={image.url} width={image.width} />
        <Form />
      </div>
    </main>
  );
};

export default SignUp;
