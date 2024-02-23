import { routes } from "@/config/routes";
import { DUMMY_ID } from "@/config/constants";

// Note: do not add href in the label object, it is rendering as label
export const pageLinks = [
  // label start
  {
    name: "Home",
  },
  // label end
  {
    name: "E-Commerce",
    href: routes.inventory.dashboard,
  },
  {
    name: "Main",
    href: routes.main.dashboard,
  },
  {
    name: "Logistics",
    href: routes.logistics.dashboard,
  },
  {
    name: "Analytics",
    href: routes.analytics,
  },
  {
    name: "File",
    href: routes.file.dashboard,
  },
  // label start
  {
    name: "Apps",
  },
  // label end
  {
    name: "Products",
    href: routes.inventory.products,
  },
  {
    name: "Product Details",
    href: routes.inventory.productDetails(DUMMY_ID),
  },
  {
    name: "Create Product",
    href: routes.inventory.createProduct,
  },
  {
    name: "Edit Product",
    href: routes.inventory.ediProduct(DUMMY_ID),
  },
  {
    name: "Categories",
    href: routes.inventory.categories,
  },
  {
    name: "Create Category",
    href: routes.inventory.createCategory,
  },
  {
    name: "Edit Category",
    href: routes.inventory.editCategory(DUMMY_ID),
  },
  {
    name: "Orders",
    href: routes.inventory.orders,
  },
  {
    name: "Order Details",
    href: routes.inventory.orderDetails(DUMMY_ID),
  },
  {
    name: "Create Order",
    href: routes.inventory.createOrder,
  },
  {
    name: "Edit Order",
    href: routes.inventory.editOrder(DUMMY_ID),
  },
  {
    name: "Reviews",
    href: routes.inventory.reviews,
  },
  {
    name: "Shop",
    href: routes.inventory.shop,
  },
  {
    name: "Cart",
    href: routes.inventory.cart,
  },
  {
    name: "Checkout & Payment",
    href: routes.inventory.checkout,
  },
  {
    name: "Main Inbox",
    href: routes.main.inbox,
  },
  {
    name: "Main Snippets",
    href: routes.main.snippets,
  },
  {
    name: "Main Templates",
    href: routes.main.templates,
  },
  {
    name: "User List",
    href: routes.user.home,
  },
  {
    name: "User Details",
    href: routes.user.details(DUMMY_ID),
  },
  {
    name: "Create User",
    href: routes.user.create,
  },
  {
    name: "Edit User",
    href: routes.user.edit(DUMMY_ID),
  },
  {
    name: "Shipment List",
    href: routes.logistics.shipmentList,
  },
  {
    name: "Shipment Details",
    href: routes.logistics.shipmentDetails(DUMMY_ID),
  },
  {
    name: "Tracking",
    href: routes.logistics.tracking(DUMMY_ID),
  },
  {
    name: "File Manager",
    href: routes.file.manager,
  },
  // label start
  {
    name: "Widgets",
  },
  // label end
  {
    name: "Cards",
    href: routes.widgets.cards,
  },
  {
    name: "Icons",
    href: routes.widgets.icons,
  },
  {
    name: "Charts",
    href: routes.widgets.charts,
  },
  // {
  //   name: 'Banners',
  //   href: routes.widgets.banners,
  // },
  {
    name: "Maps",
    href: routes.widgets.maps,
  },
  // label start
  {
    name: "Forms",
  },
  // label end
  {
    name: "Profile Settings",
    href: routes.forms.profileSettings,
  },
  {
    name: "Notification Preference",
    href: routes.forms.notificationPreference,
  },
  {
    name: "Personal Information",
    href: routes.forms.personalInformation,
  },
  {
    name: "Newsletter",
    href: routes.forms.newsletter,
  },
  // {
  //   name: 'Multi Step',
  //   href: routes.forms.multiStep,
  // },
  {
    name: "Payment checkout",
    href: routes.inventory.checkout,
  },
  // label start
  {
    name: "Tables",
  },
  // label end
  {
    name: "Basic",
    href: routes.tables.basic,
  },
  {
    name: "Collapsible",
    href: routes.tables.collapsible,
  },
  {
    name: "Enhanced",
    href: routes.tables.enhanced,
  },
  {
    name: "Sticky Header",
    href: routes.tables.stickyHeader,
  },
  {
    name: "Pagination",
    href: routes.tables.pagination,
  },
  {
    name: "Search",
    href: routes.tables.search,
  },
  // label start
  {
    name: "Pages",
  },
  // label end
  {
    name: "Profile",
    href: routes.profile,
  },
  {
    name: "Welcome",
    href: routes.welcome,
  },
  {
    name: "Coming soon",
    href: routes.comingSoon,
  },
  {
    name: "Access Denied",
    href: routes.accessDenied,
  },
  {
    name: "Not Found",
    href: routes.notFound,
  },
  {
    name: "Maintenance",
    href: routes.maintenance,
  },
  {
    name: "Blank",
    href: routes.blank,
  },
  // label start
  {
    name: "Authentication",
  },
  // label end
  {
    name: "Modern Sign Up",
    href: routes.auth.signUp1,
  },
  {
    name: "Vintage Sign Up",
    href: routes.auth.signUp2,
  },
  {
    name: "Trendy Sign Up",
    href: routes.auth.signUp3,
  },
  {
    name: "Elegant Sign Up",
    href: routes.auth.signUp4,
  },
  {
    name: "Classic Sign Up",
    href: routes.auth.signUp5,
  },
  {
    name: "Modern Sign In",
    href: routes.auth.signIn1,
  },
  {
    name: "Vintage Sign In",
    href: routes.auth.signIn2,
  },
  {
    name: "Trendy Sign In",
    href: routes.auth.signIn3,
  },
  {
    name: "Elegant Sign In",
    href: routes.auth.signIn4,
  },
  {
    name: "Classic Sign In",
    href: routes.auth.signIn5,
  },
  {
    name: "Modern Forgot Password",
    href: routes.auth.forgotPassword1,
  },
  {
    name: "Vintage Forgot Password",
    href: routes.auth.forgotPassword2,
  },
  {
    name: "Trendy Forgot Password",
    href: routes.auth.forgotPassword3,
  },
  {
    name: "Elegant Forgot Password",
    href: routes.auth.forgotPassword4,
  },
  {
    name: "Classic Forgot Password",
    href: routes.auth.forgotPassword5,
  },
  {
    name: "Modern OTP Page",
    href: routes.auth.otp1,
  },
  {
    name: "Vintage OTP Page",
    href: routes.auth.otp2,
  },
  {
    name: "Trendy OTP Page",
    href: routes.auth.otp3,
  },
  {
    name: "Elegant OTP Page",
    href: routes.auth.otp4,
  },
  {
    name: "Classic OTP Page",
    href: routes.auth.otp5,
  },
];
