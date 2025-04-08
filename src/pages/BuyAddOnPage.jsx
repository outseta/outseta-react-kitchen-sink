export const BuyAddOnPage = () => {
  const ADD_ON_UIDS = import.meta.env.VITE_OUTSETA_ADD_ON_UIDS;
  const addOnUids = ADD_ON_UIDS.split(",");
  return (
    <>
      <div data-o-anonymous>
        Buy add-on embeds are only shown if the user is logged in.
      </div>
      <menu>
        {/* Popup (Data Attributes) */}
        <button
          key={addOnUids[0]}
          data-o-profile="1"
          data-mode="popup"
          data-tab="purchaseAddOn"
          data-state-props={`{ "addOnUid": "${addOnUids[0]}" }`}
        >
          Purchase Add-On (Data Attributes)
        </button>

        {/* Popup (Code) */}
        <button
          key={addOnUids[1]}
          onClick={() =>
            Outseta.profile.open({
              mode: "popup",
              tab: "purchaseAddOn",
              stateProps: { addOnUid: addOnUids[1] },
            })
          }
        >
          Purchase Add-On (Code)
        </button>
      </menu>
      <div
        key="multiple-add-ons"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {addOnUids.map((uid) => (
          <div
            key={uid}
            data-o-profile="1"
            data-mode="embed"
            data-tab="purchaseAddOn"
            data-state-props={`{ "addOnUid": "${uid}" }`}
          />
        ))}
      </div>
    </>
  );
};
