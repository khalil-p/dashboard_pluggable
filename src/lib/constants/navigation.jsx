// Dashboard
import { RxDashboard } from 'react-icons/rx'
// policy proposal
import { BsFileRuled } from 'react-icons/bs'
import { AiFillFileAdd } from 'react-icons/ai'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { IoCarOutline } from 'react-icons/io5'
// coorporate signup
import { FaBuildingCircleCheck, FaQ } from 'react-icons/fa6'
// Repot and mis
import { VscGraph } from 'react-icons/vsc'
// Report and mis configurator
import { MdFormatListBulleted } from 'react-icons/md'
// FaQ
import { FaQuestion } from 'react-icons/fa'
// Renewals
import { MdAutorenew } from 'react-icons/md'
// help Request
import { IoIosHelpBuoy } from 'react-icons/io'
// claim Request
import { IoDocumentTextOutline } from 'react-icons/io5'
// service Request
import { IoIosDocument } from 'react-icons/io'
import Dashboard from '../../components/dashboard/Dashboard'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <RxDashboard />
    },
    // {
    //     key: 'policy_proposal_all',
    //     label: 'All',
    //     // path: '/b2c/status/all'
    //     path: '/status/all'
    //     // icon: <HiOutlineCube />
    // },
    {
        key: 'policy_proposal_status',
        label: 'Policy Proposal Status',
        path: '/policy-proposal',
        icon: <BsFileRuled />
    },
    {
        key: 'loast_leads',
        label: 'Lost Leads',
        path: '/lost',
        icon: <AiFillFileAdd />
    },
    {
        key: 'health_nstp_cases_status',
        label: 'Health NSTP Cases Status',
        path: '/health_transaction_status',
        icon: <MdOutlineHealthAndSafety />
    },
    {
        key: 'vehicle_inspection_status',
        label: 'Vehicle Inspection Status',
        path: '',
        icon: <IoCarOutline />
    },
    {
        key: 'corporate_signup',
        label: 'Corporate Signup',
        path: '',
        icon: <FaBuildingCircleCheck />
    },
    {
        key: 'report_mis',
        label: 'Report & Mis',
        path: '',
        icon: <VscGraph />
    },
    {
        key: 'report_mis_configurator',
        label: 'Report & Mis Configurator',
        path: '',
        icon: <MdFormatListBulleted />
    },
    {
        key: 'faq',
        label: 'FAQ',
        path: '/faq',
        icon: <FaQuestion />
    },
    {
        key: 'renewals',
        label: 'Renewals',
        path: '/renewals',
        icon: <MdAutorenew />
    },
    {
        key: 'user_help_request',
        label: 'Help Request',
        path: '/user_help_request',
        icon: <IoIosHelpBuoy />
    },
    {
        key: 'claim_request',
        label: 'Claim Request',
        path: '/user_claim_request',
        icon: <IoDocumentTextOutline />
    },
    {
        key: 'service_request',
        label: 'Service Request',
        path: '/user_service_request',
        icon: <IoIosDocument />
    }
]

// export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
//     {
//         key: 'settings',
//         label: 'Settings',
//         path: '/settings',
//         icon: <HiOutlineCog />
//     },
//     {
//         key: 'support',
//         label: 'Help & Support',
//         path: '/support',
//         icon: <HiOutlineQuestionMarkCircle />
//     }
// ]
