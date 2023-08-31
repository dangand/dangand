type URL_PROPS = {
  [key: string]: string;
};

export const DASHBOARD_URL: URL_PROPS = {
  LOCAL: "http://localhost:3020",
  DEV: "https://app.dangand.com",
};

export const BASE_DASHBOARD_URL =
  DASHBOARD_URL[`${process.env.NEXT_PUBLIC_URL}`];

export const PATH = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGIN_ADMIN: "/auth/login/admin",
    REGISTER: "/auth/register",
    REGISTER_VERIFICATION: "/auth/register/verification",
  },
  LANDING_PAGE: {
    HOME: "/",
    ABOUT: "/about",
    PRICE: "/price",
    TEMPLATE: "/template",
    HELP: "/help",
  },
  DASHBOARD: {
    HOME: `${BASE_DASHBOARD_URL}/`,
    LIST_INVITATION: `${BASE_DASHBOARD_URL}/list-invitation`,
    LIST_GUEST: `${BASE_DASHBOARD_URL}/guest`,
  },
};

export const AUTH_PAGE = [
  PATH.AUTH.LOGIN,
  PATH.AUTH.LOGIN_ADMIN,
  PATH.AUTH.REGISTER,
  PATH.AUTH.REGISTER_VERIFICATION,
];

export const LANDING_PAGE_ROUTE = [
  PATH.LANDING_PAGE.HOME,
  PATH.LANDING_PAGE.ABOUT,
  PATH.LANDING_PAGE.PRICE,
  PATH.LANDING_PAGE.TEMPLATE,
  PATH.LANDING_PAGE.HELP,
];

export const DASHBOARD_ROUTE = [
  PATH.DASHBOARD.HOME,
  PATH.DASHBOARD.LIST_GUEST,
  PATH.DASHBOARD.LIST_INVITATION,
];
