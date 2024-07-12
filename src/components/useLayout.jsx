import { create } from 'zustand'

const useLayout = create(set => ({
  enTest: false,
  enBase: true,
  setOpts: (opt) => set(opt)
}))

export default useLayout
