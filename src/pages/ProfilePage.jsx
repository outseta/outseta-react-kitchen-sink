export const ProfilePage = ({ tab }) => {
  return (
    <>
      <div data-o-anonymous>
        Profile embeds are only shown if the user is logged in.
      </div>
      <menu>
        {/* Popup (Data Attribute) */}
        <button data-o-profile="1" data-mode="popup" data-tab={tab}>
          Profile Button (Data Attribute)
        </button>

        {/* Popup (Code) */}
        <button
          data-o-authenticated
          onClick={() => Outseta.profile.open({ mode: "popup", tab: tab })}
        >
          Profile Button (Code)
        </button>
      </menu>

      {/* Embed - Important to add key here so React handles each widget mode as a new component */}
      <div key={tab}>
        <div data-o-profile="1" data-mode="embed" data-tab={tab} />
      </div>
    </>
  );
};
