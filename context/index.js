import { createContext } from 'react'

import { User } from 'firebase/auth'

export const Context = createContext([undefined, () => {}])
