export const activate = async () => {
    fetch(import.meta.env.VITE_URL_BACKEND_DJANGO);
    fetch(import.meta.env.VITE_NEXT_APP);
    return;
};
