import { useNavigate } from "react-router-dom";
import { HomeProps } from "./assets/interfaces";

export default function Home({ featured, closeCart }: HomeProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-12 justify-center items-center h-screen w-screen">
      <div className="text-xl flex items-center justify-around mb-10">
        <div className="flex flex-col gap-10">
          <p className="text-5xl">Welcome!</p>
          <div>
            <p>To the world's favorite shop that mocks!</p>
            <p>Or is it the world's favorite mock that shops?</p>
            <p>
              I have no idea anyway, all I know is that it mocks and it shops...
              and there is a cart here somewhere.
            </p>
            <p>
              I'm just rambling at this point, I need to have some text so it
              looks better design wise.
            </p>
            <p>
              But i don't want to copy Lorem Ipsum (I will use it for about
              page).
            </p>
            <p>
              To be fair this text isn't creative but in my defense, here is a
              random picture:
            </p>
          </div>
        </div>
        <img
          className="w-72 h-72 hover:w-80 hover:h-80 transition-all duration-500"
          src="../forest.svg"
          alt=""
        />
      </div>

      <p className="text-3xl mb-5 underline">Featured items</p>
      <div className="flex gap-5">
        {featured.map((product) => (
          <div
            className="bg-white w-64 h-64 flex flex-col justify-center items-center border border-black p-5 hover:border-amber-600 hover:border-4"
            key={product.id}
            onClick={() => {
              closeCart();
              navigate(`/store/${product.id}`);
            }}
          >
            <p>{product.title}</p>
            <img className="w-36 h-36" src={product.image} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}
