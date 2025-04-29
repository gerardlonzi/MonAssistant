import React from "react"

export default function PageNotFound(){
    return(
        <div className="bg-blue-50 h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md text-center">
          <img
            src="https://i.imgur.com/qIufhof.png" 
            alt="Robot 404"
            className="w-48 h-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Oups ! Page Non Trouvée</h1>
          <p className="text-gray-600 mb-4">
            Nous sommes désolés, mais la page que vous cherchez n'existe pas.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Retour à l'accueil
            </a>
           
          </div>
        </div>
      </div>
    )
}