export const routes = {
  alarm: {
    dashboard: "/alarm",
  },
  inventory: {
    dashboard: "/inventory",
    products: "/inventory/products",
    createProduct: "/inventory/products/create",
    productDetails: (slug: string) => `/inventory/products/${slug}`,
    ediProduct: (slug: string) => `/inventory/products/${slug}/edit`,
    categories: "/inventory/categories",
    createCategory: "/inventory/categories/create",
    editCategory: (id: string) => `/inventory/categories/${id}/edit`,
    orders: "/inventory/orders",
    createOrder: "/inventory/orders/create",
    orderDetails: (id: string) => `/inventory/orders/${id}`,
    editOrder: (id: string) => `/inventory/orders/${id}/edit`,
    reviews: "/inventory/reviews",
    shop: "/inventory/shop",
    cart: "/inventory/cart",
    checkout: "/inventory/checkout",
    trackingId: (id: string) => `/inventory/tracking/${id}`,
  },
  searchAndFilter: {
    realEstate: "/search/real-estate",
    nft: "/search/nft",
    flight: "/search/flight",
  },
  main: {
    dashboard: "/main",
    inbox: "/main/inbox",
    mainCategory: (category: string) => `/main/inbox/${category}`,
    messageDetails: (id: string) => `/main/inbox/${id}`,
    snippets: "/main/snippets",
    createSnippet: "/main/snippets/create",
    viewSnippet: (id: string) => `/main/snippets/${id}`,
    editSnippet: (id: string) => `/main/snippets/${id}/edit`,
    templates: "/main/templates",
    createTemplate: "/main/templates/create",
    viewTemplate: (id: string) => `/main/templates/${id}`,
    editTemplate: (id: string) => `/main/templates/${id}/edit`,
  },
  logistics: {
    dashboard: "/logistics",
    shipmentList: "/logistics/shipments",
    customerProfile: "/logistics/customer-profile",
    createShipment: "/logistics/shipments/create",
    editShipment: (id: string) => `/logistics/shipments/${id}/edit`,
    shipmentDetails: (id: string) => `/logistics/shipments/${id}`,
    tracking: (id: string) => `/logistics/tracking/${id}`,
  },
  executive: {
    dashboard: "/executive",
  },
  analytics: "/analytics",
  financial: {
    dashboard: "/financial",
  },
  file: {
    dashboard: "/file",
    manager: "/file-manager",
    upload: "/file-manager/upload",
    create: "/file-manager/create",
  },
  pos: {
    index: "/point-of-sale",
  },
  eventCalendar: "/event-calendar",
  rolesPermissions: "/roles-permissions",
  user: {
    home: "/user",
    create: "/user/create",
    details: (id: string) => `/user/${id}`,
    edit: (id: string) => `/user/${id}/edit`,
  },
  widgets: {
    cards: "/widgets/cards",
    icons: "/widgets/icons",
    charts: "/widgets/charts",
    maps: "/widgets/maps",
    banners: "/widgets/banners",
  },
  tables: {
    basic: "/tables/basic",
    collapsible: "/tables/collapsible",
    enhanced: "/tables/enhanced",
    pagination: "/tables/pagination",
    search: "/tables/search",
    stickyHeader: "/tables/sticky-header",
  },
  multiStep: "/multi-step",
  forms: {
    profileSettings: "/forms/profile-settings",
    notificationPreference: "/forms/profile-settings/notification",
    personalInformation: "/forms/profile-settings/profile",
    newsletter: "/forms/newsletter",
  },
  emailTemplates: "/email-templates",
  profile: "/profile",
  welcome: "/welcome",
  comingSoon: "/coming-soon",
  accessDenied: "/access-denied",
  notFound: "/not-found",
  maintenance: "/maintenance",
  blank: "/blank",
  auth: {
    signUp1: "/auth/sign-up-1",
    signUp2: "/auth/sign-up-2",
    signUp3: "/auth/sign-up-3",
    signUp4: "/auth/sign-up-4",
    signUp5: "/auth/sign-up-5",
    // sign in
    signIn1: "/auth/sign-in-1",
    signIn2: "/auth/sign-in-2",
    signIn3: "/auth/sign-in-3",
    signIn4: "/auth/sign-in-4",
    signIn5: "/auth/sign-in-5",
    // forgot password
    forgotPassword1: "/auth/forgot-password-1",
    forgotPassword2: "/auth/forgot-password-2",
    forgotPassword3: "/auth/forgot-password-3",
    forgotPassword4: "/auth/forgot-password-4",
    forgotPassword5: "/auth/forgot-password-5",
    // OTP
    otp1: "/auth/otp-1",
    otp2: "/auth/otp-2",
    otp3: "/auth/otp-3",
    otp4: "/auth/otp-4",
    otp5: "/auth/otp-5",
  },
  signIn: "/signin",
  forgotPassword: "/forgotpassword",
  signUp: "/signup",
};
