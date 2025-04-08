export const LeadCapturePage = () => {
  const LEAD_CAPTURE_UIDS = import.meta.env.VITE_OUTSETA_LEAD_CAPTURE_UIDS;
  const leadCaptureUids = LEAD_CAPTURE_UIDS.split(",");
  return (
    <>
      <menu>
        {/* Popup (Data Attributes) */}
        <button
          data-o-lead-capture="1"
          data-mode="popup"
          data-form-uid={leadCaptureUids[0]}
        >
          Register interest (Data Attributes)
        </button>

        {/* Popup (Code) */}
        <button
          onClick={() => {
            Outseta.leadCapture.open({
              mode: "popup",
              formUid: leadCaptureUids[1],
            });
          }}
        >
          Register interest (Code)
        </button>
      </menu>

      {/* Embed - Important to add key here so React handles each widget mode as a new component */}
      {leadCaptureUids.map((uid) => (
        <div key={uid}>
          <div
            data-o-lead-capture="1"
            data-mode="embed"
            data-form-uid={uid}
          ></div>
        </div>
      ))}
    </>
  );
};
