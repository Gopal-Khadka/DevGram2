interface Props {
  url: string;
  width: string;
}

const Image = ({ width, url }: Props) => {
  return (
    <div className="col p-2 d-flex justify-content-center">
      <img
        src={url}
        alt="photos of friends"
        className="object-fit-cover rounded"
        width={width}
      />
    </div>
  );
};

export default Image;
