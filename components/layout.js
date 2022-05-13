import React, { useEffect, useContext } from "react";

import { createFirebaseInstance } from '../services/createFirebaseInstance'
import { onAuthStateChanged, getAuth, signInAnonymously } from 'firebase/auth'

import { Context } from '../context'

function Layout({ children }) {
  const [authState, setAuthState] = useContext(Context);

  useEffect(() => {
    const listener = onAuthStateChanged(getAuth(createFirebaseInstance()), res => {
      console.log('Auth state: ', res)
      setAuthState(res)
    })

    return () => listener()
  }, [])

  useEffect(() => {
    if (authState === null) {
      signInAnonymously(getAuth(createFirebaseInstance()))
    }
  }, [authState])

  return (
    <div className="container mx-auto py-40">
      <div className="grid grid-cols-1 gap-4">
        <div className="col-start-1 col-end-7 px-10 sm:px-22 md:px-22 lg:px-72 text-lg">
          <audio controls hidden loop id="a1">
            <source src="/music.mp3" type="audio/mpeg" />
          </audio>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
