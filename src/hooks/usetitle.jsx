import { useEffect } from "react";

const usetitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};
export default usetitle;
