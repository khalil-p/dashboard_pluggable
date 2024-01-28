import { RxDashboard } from "react-icons/rx";
import { BsFileRuled } from "react-icons/bs";
import { AiOutlineFileAdd } from "react-icons/ai";
import {
  MdOutlineHealthAndSafety,
  MdFormatListBulleted,
  MdAutorenew,
} from "react-icons/md";
import { IoCarOutline, IoDocumentTextOutline } from "react-icons/io5";
import { BsBuildingCheck } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoIosHelpBuoy } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <RxDashboard />,
  },
  {
    key: "policy_proposal_status",
    label: "Policy Proposal Status",
    path: "/policy_proposal_status/status/all",
    icon: <BsFileRuled />,
  },
  {
    key: "loast_leads",
    label: "Lost Leads",
    path: "/lost",
    icon: <AiOutlineFileAdd />,
  },
  {
    key: "health_nstp_cases_status",
    label: "Health NSTP Cases Status",
    path: "/health_transaction_status",
    icon: <MdOutlineHealthAndSafety />,
  },
  {
    key: "vehicle_inspection_status",
    label: "Vehicle Inspection Status",
    path: null,
    icon: <IoCarOutline />,
    hasSubMenu: true,
  },
  {
    key: "corporate_signup",
    label: "Corporate Signup",
    path: "",
    icon: <BsBuildingCheck />,
  },
  {
    key: "report_mis",
    label: "Report & Mis",
    path: null,
    icon: <VscGraph />,
    hasSubMenu: true,
  },
  {
    key: "report_mis_configurator",
    label: "Report & Mis Configurator",
    path: null,
    icon: <MdFormatListBulleted />,
    hasSubMenu: true,
  },
  {
    key: "faq",
    label: "FAQ",
    path: "/faq",
    icon: <RxQuestionMarkCircled />,
  },
  {
    key: "renewals",
    label: "Renewals",
    path: null,
    icon: <MdAutorenew />,
  },
  {
    key: "user_help_request",
    label: "Help Request",
    path: null,
    icon: <IoIosHelpBuoy />,
  },
  {
    key: "claim_request",
    label: "Claim Request",
    path: "/user_claim_request",
    icon: <IoDocumentTextOutline />,
  },
  {
    key: "service_request",
    label: "Service Request",
    path: "/user_service_request",
    icon: <IoDocumentOutline />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "logout",
    label: "Logout",
    path: "/login",
    icon: <RiLogoutCircleLine />,
  },
];

export const SUB_MENU_LIST = [
  // {
  //   name: "Policy Proposal Status",
  //   menus: [
  //     { key: "all", label: "All", path: "/all" },
  //     { key: "car", label: "Car", path: "/car" },
  //     { key: "bike", label: "Bike", path: "/bike" },
  //     { key: "health", label: "Health", path: "/Health" },
  //   ],
  // },
  {
    name: "Vehicle Inspection Status",
    menus: [
      { key: "InspectionCar", label: "Car", path: "/car" },
      {
        key: "commercial_status",
        label: "Commercial Status",
        path: "/commercial_status",
      },
    ],
  },
  {
    name: "Report & Mis",
    menus: [
      { key: "reports", label: "Car", path: "/mis_configuration_report" },
    ],
  },
  {
    name: "Report & Mis Configurator",
    menus: [
      {
        key: "RMISC_create",
        label: "Create",
        path: "/mis_configuration",
      },
      {
        key: "RMISC_list",
        label: "List",
        path: "/mis_list",
      },
    ],
  },
  {
    name: "Renewals",
    menus: [
      {
        key: "renewals_create",
        label: "Create",
        path: "/renewals_create",
      },
      {
        key: "renewals_list",
        label: "List",
        path: "/renewals_list",
      },
    ],
  },  
];
