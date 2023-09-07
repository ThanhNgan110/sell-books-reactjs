
export const getTokenLocalStorage = () => {
  const token =  localStorage.getItem("token");
  return token;

}
export const removeTokenLocalStorage = () => {
  const token = localStorage.removeItem("token")
  return token;
}