import React from 'react';
import toast from 'react-hot-toast';
import { useState } from 'react';
import AnimatedLogo from '../components/ui/AnimatedLogo';

const Home = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  if (counter === 5) {
    // Quando il counter raggiunge 5, generiamo un errore
    throw new Error('I crashed when counter reached 5!');
  }

  return (
    <div className="">
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Eureka, it works! <span className="text-sm font-medium text-gray-600">i hope</span>
          </h1>
          <AnimatedLogo width="8" height="8" />
          <div className="p-6 bg-green-100 rounded-lg my-8">
            <p className="text-lg text-green-700 font-medium">
              Ottimo! Il template è stato configurato correttamente. <br /> 
              Puoi procedere eliminando il contenuto di questa pagina e iniziare a costruire la tua app.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-left border-4 border-l-rose-600 border-t-0 border-r-0 border-b-0">
            <h2 className="text-xl font-bold mb-4 text-rose-600">
              Informazioni sul Progetto
            </h2>
            <p className="text-gray-700 mb-4">
              Questo è un template minimale React + Tailwind CSS. Include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>React 19 con configurazione Vite ottimizzata</li>
              <li>Tailwind CSS 4.0 preconfigurato</li>
              <li>React Router per la navigazione</li>
              <li>
                <button className="text-white bg-rose-600 p-2 rounded-xl hover:bg-rose-800 cursor-pointer" onClick={() => {
                  // random toast between toast, toast.success, toast.error, toast.loading
                  const toasts = [toast, toast.success, toast.error];
                  const randomToast = toasts[Math.floor(Math.random() * toasts.length)];
                  randomToast("I'm not a bread slice 🍞, I'm a toast 🥪!");

                }}>
                  React Hot Toast
                </button>{' '}
                per le notifiche
              </li>
              <li>
                <button className='text-white bg-rose-600 p-2 rounded-xl hover:bg-rose-800 cursor-pointer' onClick={() => handleClick()}>
                  React Error Boundary
                </button>{' '}
                - Clicca 5 volte per generare un errore, ora sei a {counter}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;