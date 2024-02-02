import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // useHistory yerine useNavigate kullanıyoruz
import "../components/css/SignIn.css";

export default function Example() {
  const navigate = useNavigate(); // useHistory yerine useNavigate kullanıyoruz
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Burada giriş işlemlerini gerçekleştirin
    // Örnek: Kullanıcı girişi başarılı ise isLoggedIn durumunu güncelle
    setLoggedIn(true);

    // Başarılı giriş sonrası yönlendirme
    navigate('/dashboard'); // useHistory yerine useNavigate kullanıyoruz
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-50 w-auto logo-with-shadow"
            src={process.env.PUBLIC_URL + '/img/logorgb.png'}
            alt="logo"
          />
          <h4 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Hesabınıza Giriş Yapınız.
          </h4>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            {/* Diğer form elemanları buraya gelecek */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-300 placeholder:text-yellow-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Şifre
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
