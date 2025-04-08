export const SupportPage = () => {
  return (
    <>
      {/* Popup (Data Attributes) */}
      <button data-o-support="1" data-mode="popup">
        Ask support (Data Attributes)
      </button>

      {/* Popup (Code) */}
      <button
        onClick={() => {
          Outseta.support.open({ mode: "popup" });
        }}
      >
        Ask support (Code)
      </button>

      {/* Embed - Important to add key here so React handles each widget mode as a new component */}
      <div key="support">
        <div data-o-support="1" data-mode="embed"></div>
      </div>
    </>
  );
};
