import { Vector3 } from "three";
import { create } from "zustand";

const useObjectStore = create((set) => ({
  transformsObject: {
    position: new Vector3(),
    
    scale: new Vector3(),
  },

  setObjectTransforms: (newTransformsObject) =>
    set((state) => ({
      transformsObject: {
        ...state.transformsObject, // Spread
        ...newTransformsObject,
      },
    })),
}));

export default useObjectStore;