import { create } from "zustand";

const useEditorStore = create((set) => ({
  canvas: null, // Fabric canvas instance
  setCanvas: (canvas) => set({ canvas }),

  activeTool: null,
  setActiveTool: (tool) => set({ activeTool: tool }),

  history: [],
  future: [],
  addHistory: (data) =>
    set((state) => ({
      history: [...state.history, data],
      future: [],
    })),
  undo: () =>
    set((state) => {
      if (state.history.length === 0) return state;
      const last = state.history[state.history.length - 1];
      return {
        history: state.history.slice(0, -1),
        future: [last, ...state.future],
      };
    }),
  redo: () =>
    set((state) => {
      if (state.future.length === 0) return state;
      const first = state.future[0];
      return {
        history: [...state.history, first],
        future: state.future.slice(1),
      };
    }),
}));

export default useEditorStore;
