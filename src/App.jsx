import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router";
import { AuthPage } from "./pages/AuthPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LeadCapturePage } from "./pages/LeadCapturePage";
import { SupportPage } from "./pages/SupportPage";
import { EmailListPage } from "./pages/EmailListPage";
import { BuyAddOnPage } from "./pages/BuyAddOnPage";
import { MembersOnlyPage } from "./pages/MembersOnlyPage";
import { LogoutPage } from "./pages/LogoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <nav>
          <Link to="/">React Kitchen Sink</Link>

          <button
            data-o-anonymous
            data-o-auth="1"
            data-mode="popup"
            data-widget-mode="register"
          >
            Signup
          </button>
          <button
            data-o-anonymous
            data-o-auth="1"
            data-mode="popup"
            data-widget-mode="login"
          >
            Login
          </button>
          <button data-o-authenticated data-o-profile="1" data-mode="popup">
            <img src="[data-o-member:ProfileImageS3Url]" />
            <span data-o-member="Email">Profile</span>
          </button>
          <button data-o-authenticated data-o-logout-link="1">
            Logout
          </button>
        </nav>

        <main>
          <Outlet />
        </main>
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <h1>Outseta React Kitchen Sink</h1>

            <ul>
              <li>
                <Link to="/signup">Auth Embed (Signup)</Link>
              </li>
              <li>
                <Link to="/login">Auth Embed (Login)</Link>
              </li>
              <li>
                <Link to="/signup-login">Auth Embed (Signup/Login)</Link>
              </li>
              <li>
                <Link to="/my-billing">Profile Embed (Billing)</Link>
              </li>
              <li>
                <Link to="/my-profile">Profile Embed (Profile)</Link>
              </li>
              <li>
                <Link to="/my-account">Profile Embed (Account)</Link>
              </li>
              <li>
                <Link to="/buy-add-ons">Profile Embed (Buy Add On)</Link>
              </li>
              <li>
                <Link to="/lead-capture">Lead Capture Embed</Link>
              </li>
              <li>
                <Link to="/email-list">Email List Embed</Link>
              </li>
              <li>
                <Link to="/members-only">
                  Members Only Page (requires login)
                </Link>
              </li>
              <li>
                <Link to="/logout">Logout (not an embed)</Link>
              </li>
            </ul>

            <h2>Kitchen Sink?!?!</h2>
            <p>
              A "kitchen sink" provides comprehensive examples of how to use a
              technology. It's not intended to be a starting point for new
              projects.
            </p>

            <p>
              If you're looking for a starting point for a new project, check
              out the{" "}
              <a href="https://github.com/outseta/outseta-react-starter">
                Outseta React Starter
              </a>
              .
            </p>
            <h2>Learn more</h2>
            <ul>
              <li>
                <a href="https://go.outseta.com/support/kb/articles/aWxXddWV/javascript-configuration-guide">
                  JavaScript configuration guide
                </a>
                <a href="https://go.outseta.com/support/docs/articles/aWxXddWV/javascript-configuration-guide">
                  LLM Version
                </a>
              </li>
              <li>
                <a href="https://go.outseta.com/support/kb/articles/79OjwGQE/outseta-embed-api">
                  Outseta embed API docs
                </a>
                <a href="https://go.outseta.com/support/docs/articles/79OjwGQE/outseta-embed-api">
                  LLM Version
                </a>
              </li>
              <li>
                <a href="https://github.com/outseta/outseta-react-kitchen-sink">
                  View the code on GitHub
                </a>
              </li>
            </ul>
          </>
        ),
      },
      {
        path: "login",
        element: <AuthPage widgetMode="login" />,
      },
      {
        path: "signup",
        element: <AuthPage widgetMode="register" />,
      },
      {
        path: "signup-login",
        element: <AuthPage widgetMode="login|register" />,
      },
      {
        path: "my-billing",
        element: <ProfilePage tab="billing" />,
      },
      {
        path: "my-account",
        element: <ProfilePage tab="account" />,
      },
      {
        path: "my-profile",
        element: <ProfilePage tab="profile" />,
      },
      {
        path: "lead-capture",
        element: <LeadCapturePage />,
      },
      {
        path: "support",
        element: <SupportPage />,
      },
      {
        path: "email-list",
        element: <EmailListPage />,
      },
      {
        path: "buy-add-ons",
        element: <BuyAddOnPage />,
      },
      {
        path: "logout",
        element: <LogoutPage />,
      },
      {
        path: "members-only",
        element: <MembersOnlyPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
