import { useNavigate } from "react-router-dom";
import { HomeProps } from "./assets/interfaces";

export default function Home({ featured, closeCart }: HomeProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center md:p-12 lg:h-screen lg:w-screen">
      <div className="flex items-center justify-around md:flex-row xs:flex-col lg:text-xl mb-10 lg:gap-10">
        <div className="flex flex-col md:gap-10">
          <p className="xs:mt-20 md:text-5xl xs:text-xl xs:self-center">
            Welcome!
          </p>
          <div className="xs:text-sm xs:m-5 md:text-2xl">
            <p>To the world's favorite shop that mocks!</p>
            <p>Or is it the world's favorite mock that shops?</p>
            <p>
              I have no idea anyway, all I know is that it mocks and it shops...
              and there is a cart here somewhere.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur a voluptas incidunt, omnis est aperiam! Fugiat error
              delectus assumenda illo.
            </p>
          </div>
        </div>
        <img
          className="xs:w-20 xs:h-20 md:w-72 md:h-72 hover:w-80 hover:h-80 transition-all duration-500"
          src="../store.svg"
          alt=""
        />
      </div>

      <p className="xs:text-2xl md:text-3xl mb-5 underline">Featured items</p>
      <div className="flex gap-5 flex-wrap mb-20 xs:justify-center xs:items-center">
        {featured.map((product) => (
          <div
            className="flex flex-col justify-center items-center border border-black p-5 hover:border-amber-600 hover:border-4 bg-white md:w-64 md:h-64 xs:w-40 xs:h-40"
            key={product.id}
            onClick={() => {
              closeCart();
              navigate(`/store/${product.id}`);
            }}
          >
            <p className="xs:text-xs md:text-base">{product.title}</p>
            <img
              className="xs:w-14 xs:h-14 md:w-36 md:h-36"
              src={product.image}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
