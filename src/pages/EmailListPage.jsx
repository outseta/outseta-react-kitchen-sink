export const EmailListPage = () => {
  const EMAIL_LIST_UIDS = import.meta.env.VITE_OUTSETA_EMAIL_LIST_UIDS;
  const emailListUids = EMAIL_LIST_UIDS.split(",");
  return (
    <>
      <menu>
        {/* Popup (Data attributes) */}
        <button
          data-o-email-list="1"
          data-mode="popup"
          data-email-list-uid={emailListUids[0]}
        >
          Sign up for emails (Data attributes)
        </button>

        {/* Popup (Code) */}
        <button
          onClick={() => {
            Outseta.emailList.open({
              mode: "popup",
              emailListUid: emailListUids[1],
            });
          }}
        >
          Sign up for emails (Code)
        </button>
      </menu>

      {/* Embed - Important to add key here so React handles each widget mode as a new component */}
      {emailListUids.map((uid) => (
        <div key={uid}>
          <div
            data-o-email-list="1"
            data-mode="embed"
            data-email-list-uid={uid}
          ></div>
        </div>
      ))}
    </>
  );
};
