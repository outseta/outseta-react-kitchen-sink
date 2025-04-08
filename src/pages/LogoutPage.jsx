export const LogoutPage = () => {
  return (
    <>
      <menu>
        {/* Code */}
        <button data-o-authenticated onClick={() => Outseta.logout()}>
          Logout Button (Code)
        </button>
        {/* Button */}
        <button data-o-logout-link="1">Logout Button (Data Attribute)</button>
        <br />
        {/* Link */}
        <a href="/#o-logout-link">Logout Link</a>
      </menu>
    </>
  );
};
