import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = 'live_PEqlSO8BqVel12npxztAdjfSmceg88G1qDFdZfCQ6HcYU90BJsY0FILLHrxzcViT';

export default function PetDetails() {
  const [dog, setDog] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`,
          { headers: { 'x-api-key': API_KEY } }
        );
        const data = await res.json();
        setDog(data[0]);
        console.log(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleDogData();
  }, [name]);

  if (!dog) {
    return (
      <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-white">Loading...</h1>
      </section>
    );
  }

  return (
    <>
      <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center">
          <article>
            <img
              src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
              alt={dog.name}
              className="rounded w-full h-auto object-cover"
            />
          </article>
          <article>
            <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">
              {dog.name}
            </h1>
            {dog.description && (
              <p className="text-slate-400 mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed">
                {dog.description}
              </p>
            )}

            <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
              <li>
                <span className="font-bold text-slate-200">Bred For:</span>{" "}
                {dog.bred_for}
              </li>
              <li>
                <span className="font-bold text-slate-200">Height:</span>{" "}
                {dog.height.metric} cm
              </li>
              <li>
                <span className="font-bold text-slate-200">Weight:</span>{" "}
                {dog.weight.metric} kgs
              </li>
              <li>
                <span className="font-bold text-slate-200">Breed Group:</span>{" "}
                {dog.breed_group}
              </li>
              <li>
                <span className="font-bold text-slate-200">Lifespan:</span>{" "}
                {dog.life_span}
              </li>
              <li>
                <span className="font-bold text-slate-200">Temperament:</span>{" "}
                {dog.temperament}
              </li>
            </ul>

            <Link
              to="/"
              className="inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white hover:bg-slate-500 transition-all duration-200"
            >
              &larr; Back
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
