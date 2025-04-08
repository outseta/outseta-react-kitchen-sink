export const AuthPage = ({ widgetMode }) => {
  return (
    <>
      <menu>
        {/* Popup Button (Data Attribute) */}
        <button
          data-o-auth="1"
          data-mode="popup"
          data-widget-mode={widgetMode}
          data-registration-defaults={JSON.stringify({
            Subscription: {
              DiscountCouponSubscriptions: [
                {
                  DiscountCoupon: {
                    UniqueIdentifier: "DEMO",
                  },
                },
              ],
            },
          })}
        >
          {widgetMode} button (Data Attributes)
        </button>

        {/* Popup Button (Code) */}
        <button
          onClick={() => {
            Outseta.auth.open({
              mode: "popup",
              widgetMode: widgetMode,
              registrationDefaults: JSON.stringify({
                Subscription: {
                  DiscountCouponSubscriptions: [
                    {
                      DiscountCoupon: {
                        UniqueIdentifier: "DEMO",
                      },
                    },
                  ],
                },
              }),
            });
          }}
        >
          {widgetMode} button (Code)
        </button>
      </menu>

      {/* Embed - Important to add key here so React handles each widget mode as a new component */}
      <div key={widgetMode}>
        <div
          data-o-auth="1"
          data-mode="embed"
          data-widget-mode={widgetMode}
          data-registration-defaults={JSON.stringify({
            Subscription: {
              DiscountCouponSubscriptions: [
                {
                  DiscountCoupon: {
                    UniqueIdentifier: "DEMO",
                  },
                },
              ],
            },
          })}
        ></div>
      </div>
    </>
  );
};
