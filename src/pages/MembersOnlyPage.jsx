const OUTSETA_DOMAIN = import.meta.env.VITE_OUTSETA_DOMAIN;

export const MembersOnlyPage = () => {
  return (
    <>
      <h1>Members Only Page</h1>
      <p>
        This page is only visible to authenticated users with the correct
        plan/add-on if {OUTSETA_DOMAIN} has configured{" "}
        {window.location.pathname} as protected content.
      </p>
      <p>
        It will redirect to the configured redirect path if you are not
        authenticated or has the incorrect plan/add-on.
      </p>
    </>
  );
};
